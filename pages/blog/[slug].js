import fs from 'fs';
import path from 'path';

import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import dayjs from 'dayjs';

import { getAllPosts } from '../../lib/posts';

import SyntaxHighlighter from 'react-syntax-highlighter';
import CodeBlock from '../../components/codeblock.js';

const components = { SyntaxHighlighter };

import styles from '../../styles/post.module.scss';

export default function slug({ frontMatter, source, slug }) {

    return (
        <>
          <Head>
            <title>{frontMatter.title}</title>
            <meta name="fediverse:creator" content="@ethancedwards@fosstodon.org" />
          </Head>

          <div className={styles.content}>
                <h1>{frontMatter.title}</h1>
                <h3>{dayjs(frontMatter.date).format('MMMM D, YYYY')}</h3>
                <h4>{frontMatter.author}</h4>
                <hr/>
                <main>
                  <MDXRemote {...source} components={components}/>
                </main>
          </div>
        </>
    );
}

export async function getStaticProps({ params: { slug } }) {
    const post = getAllPosts().find(x => x.slug === slug);
    const frontMatter = post.frontMatter;
    const source = await serialize(post.content, {
        mdxOptions: {
            // remark/rehype plugins
            // remarkPlugins: [remarkMath],
            // rehypePlugins: [rehypeKatex]
        }
    });

    return {
        props: {
            frontMatter,
            source,
            slug
        }
    };
}

// honestly not really sure why I need this. I guess Next needs it
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }));

    return {
        paths,
        fallback: false
    };
}
