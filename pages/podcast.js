import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';

import styles from '../styles/blog.module.scss';

export default function Blog({ episodes }) {

    return (
        <>
            <Head>
                <title>The Ridge Podcast</title>
            </Head>

            <div className={styles.podcast}>
                <h1 className={styles.header}>Welcome to The Ridge Podcast</h1>
                <p>Here you can find conversations on Appalachia history and culture.</p>
            </div>
            <h1 className={styles.header}>List of episodes:</h1>
            <div className={styles.blog}>
                {episodes.map((episodes, index) => (
                    <div className={styles.post}>
                        <hr/>
                        <Link href={episodes.link} passHref>
                            <a><h1 className={styles.info}>{episodes.title}</h1></a>
                        </Link>
                        <h4 className={styles.info}>The Ridge Podcast</h4>
                        <h4 className={styles.info}>{dayjs(episodes.date).format('MMMM D, YYYY')}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getServerSideProps() {
    // local development
    // const res = { quote: "Quote", author: "Author" };
    // const quotes = res;

    // production
    const res = await fetch(`https://api.ethancedwards.com/podcast/v1/dump`);
    const episodes = await res.json();

    return { props: { episodes } };

}
