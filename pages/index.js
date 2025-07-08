import dayjs from 'dayjs';

import React from 'react';
import Link from 'next/link';

import { NextSeo, SocialProfileJsonLd, LogoJsonLd } from 'next-seo';

import styles from '../styles/index.module.scss';

import { getAllPosts } from '../lib/posts';

export default function Home({ quotes, posts }) {

    console.log(quotes);

    return (
        <div className={styles.App}>
          <NextSeo
            openGraph={{
              title: "Ethan Carter Edwards",
              url: 'https://ethancedwards.com/',
            }}
          />

          <SocialProfileJsonLd
            type="Person"
            name="Ethan Carter Edwards"
            url="https://ethancedwards.com"
            sameAs={[
              'https://www.linkedin.com/in/ethancedwards8/',
              'https://github.com/ethancedwards8',
              'https://gitlab.com/ethancedwards/',
            ]}
          />

          <LogoJsonLd
            url="https://ethancedwards.com"
            logo="https://ethancedwards.com/favicon.png"
            alt="Ethan Carter Edwards"
          />

          <div className={styles.wrapper}>

            <hgroup className={styles.quote}>
              <div>
                <h1 id="quote">"{quotes.quote}"</h1>
                <h2 id="author"> - {quotes.author}</h2>
              </div>
            </hgroup>

            <div className={styles.recentposts}>
              <div>
                <h2 className={styles.recent}>Recent Blog Posts:</h2>
                <posts>
                  {posts.map((post, index) => (
                      <div className={styles.post}>
                        <hr/>
                        <Link href={'/blog/' + post.slug} passHref>
                          <h3>{post.frontMatter.title}</h3>
                        </Link>
                        <p className={styles.info}>{post.frontMatter.author}</p>
                        <p className={styles.info}>{dayjs(post.frontMatter.date).format('MMMM D, YYYY')}</p>
                      </div>
                  ))}
                </posts>

              </div>
            </div>

          </div>

        </div>
    );
}

export async function getServerSideProps() {
    // local development
    // const res = { quote: "Quote", author: "Author" };
    // const quotes = res;
    
    let quotes;
    let final;

    const posts = getAllPosts();

    await fetch(`https://api.ethancedwards.com/quotes/v1`).then((res) => {
    // await fetch(`http://localhost/quotes/v1`).then((res) => {
            if (!res.ok) {
                final = { quote: "Value your freedom or you will lose it, teaches history", author: "Richard Stallman" };
            } else {
                final = res.json();
            }
        });
    quotes = await final;

    return { props: { quotes, posts } };
}
