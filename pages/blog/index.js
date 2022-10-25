import Link from 'next/link';
import dayjs from 'dayjs';

import { getAllPosts } from '../../lib/posts';
import styles from '../../styles/blog.module.scss';

export default function Blog({ posts }) {
    return (
        <>
          <h1 className={styles.header}>List of posts:</h1>
          <div className={styles.blog}>
            {posts.map((post, index) => (
                <div className={styles.post}>
                  <hr/>
                  <Link href={'/blog/' + post.slug} passHref>
                    <a><h1>{post.frontMatter.title}</h1></a>
                  </Link>
                  <h4>{dayjs(post.frontMatter.date).format('MMMM D, YYYY')}</h4>
                  <h4>{post.frontMatter.author}</h4>
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
