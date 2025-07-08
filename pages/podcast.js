import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';

import { NextSeo } from 'next-seo';

import styles from '../styles/blog.module.scss';

export default function Podcast({ episodes }) {

    const description = "With a focus on people and stories from the Blue Ridge/Appalachian region, the podcast touches on a wide range of topics like politics, local government, law, education, local history, faith, community service, and cultural heritage.";

    return (
        <>
          <NextSeo
            title="The Ridge Podcast"
            description={description}
            openGraph={{
              url: 'https://ethancedwards.com/podcast',
            }}
          />

            <div className={styles.podcast}>
                <h1 className={styles.header}>Welcome to The Ridge Podcast</h1>
                <p>{description}</p>
            </div>
            <h1 className={styles.header}>List of episodes:</h1>
            <div className={styles.blog}>
                {episodes.map((episode, index) => (
                    <div className={styles.post}>
                        <hr/>
                        <Link href={episode.link} passHref>
                            <h1 className={styles.info}>{episode.title}</h1>
                        </Link>
                        <h4 className={styles.info}>The Ridge Podcast</h4>
                        <h4 className={styles.info}>{dayjs(episode.date).format('MMMM D, YYYY')}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getStaticProps() {
    // local development
    // const res = { quote: "Quote", author: "Author" };
    // const quotes = res;

    // production
    const res = await fetch(`https://api.ethancedwards.com/podcast/v1/dump`);
    const episodes = await res.json();

    return { props: { episodes },
            revalidate: 86400 };

}
