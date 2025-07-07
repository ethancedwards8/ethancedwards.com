import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';

import { NextSeo } from 'next-seo';

import { getAllPosts } from '../../lib/posts';
import styles from '../../styles/blog.module.scss';

export default function Blog({ posts }) {
    return (
        <>
          <NextSeo
            title="Blog"
            description="Ethan's blog"
            openGraph={{
              url: 'https://ethancedwards.com/blog',
            }}
          />

          <h1 className={styles.header}>List of posts:</h1>
          <div className={styles.blog}>
            {posts.map((post, index) => (
                <div className={styles.post}>
                  <hr/>
                  <Link href={'/blog/' + post.slug} passHref>
                    <h1>{post.frontMatter.title}</h1>
                  </Link>
                  <h4 className={styles.info}>{post.frontMatter.author}</h4>
                  <h4 className={styles.info}>{dayjs(post.frontMatter.date).format('MMMM D, YYYY')}</h4>
                  <p>{post.frontMatter.description}</p>
                </div>
            ))}
          </div>
        </>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts
        }
    };
}
