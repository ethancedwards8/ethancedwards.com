import fs from 'fs';
import path from 'path';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { getAllPosts } from '../../lib/posts';

const components = { SyntaxHighlighter };

export default function slug({ frontMatter, source, slug }) {

    return (
        <>
          <h1>{frontMatter.title}</h1>
          <main>
            <MDXRemote {...source} components={components}/>
          </main>
        </>
    );
}

export async function getStaticProps({ params: { slug } }) {
    const post = getAllPosts().find(x => x.slug === slug);
    const frontMatter = post.frontMatter;
    const source = await serialize(post.content);

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
