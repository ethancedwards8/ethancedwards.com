import dayjs from 'dayjs';

import React from 'react';
import Link from 'next/link';

import styles from '../styles/index.module.scss';

import { getAllPosts } from '../lib/posts';

export default function Home({ quotes, posts }) {

    console.log(quotes);

    return (
        <div className={styles.App}>

          <div className={styles.wrapper}>

            <hgroup className={styles.quote}>
              <h1 id="quote">"{quotes.quote}"</h1>
              <h2 id="author">- {quotes.author}</h2>
            </hgroup>

            <div className={styles.recentposts}>
              <div>
                <h2 className={styles.recent}>Recent Blog Posts:</h2>
                <posts>
                  {posts.map((post, index) => (
                      <div className={styles.post}>
                        <hr/>
                        <Link href={'/blog/' + post.slug} passHref>
                          <a><h3>{post.frontMatter.title}</h3></a>
                        </Link>
                        <p>{post.frontMatter.author}</p>
                        <p>{dayjs(post.frontMatter.date).format('MMMM D, YYYY')}</p>
                      </div>
                  ))}
                </posts>

              </div>
            </div>

            <div className={styles.welcome}>
              <h1>Welcome to my website! Visit the about or blog pages for more content!</h1>
              <p>This site is a work in progress, visit again to see it updated!</p>
              <p>(hint: refresh!)</p>
            </div>

          </div>

        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.ethancedwards.com/quotes/v1`);
    const quotes = await res.json();

    const posts = getAllPosts();

    return { props: { quotes, posts } };
}
