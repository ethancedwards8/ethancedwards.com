import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';

import styles from '../styles/blog.module.scss';

export default function Podcast({ episodes }) {

    return (
        <>
            <Head>
                <title>The Ridge Podcast</title>
            </Head>

            <div className={styles.podcast}>
                <h1 className={styles.header}>Welcome to The Ridge Podcast</h1>
                <p>Here you can find conversations on Appalachian history and culture.</p>
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
