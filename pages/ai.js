import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';

import { NextSeo } from 'next-seo';

import styles from '../styles/blog.module.scss';


export default function AI({ readings }) {

    const description = `I'm becoming increasingly convinced that the
    advancement and development of AI is the most important technological
    innovation in human history, for better or for worse. I'm also convinced
    that how we grow, change, and adapt to it is the most important question.
    If nothing else, it is the only thing I care about right now.

    I have read everything on this list. I may write start writing some about
    what I read, too.

    Disclaimer: I don't agree with everything listed below or disagree with
    everything listed below. I will read anything and everything, and this is
    just a list. Please send me things to read! :)`;

    return (
        <>
          <NextSeo
            title="AI"
            description="Ethan's AI reading list"
            openGraph={{
              url: 'https://ethancedwards.com/ai',
            }}
          />

            <h1 className={styles.header}>Ethan's AI Reading List</h1>
            <div className={styles.podcast}>
                <p>{description}</p>
                <p>In no particular order:</p>
            </div>
            <div className={styles.blog}>
                {readings.map((reading, index) => (
                    <div key={index} className={styles.post}>
                        <hr/>
                        
                        <Link href={reading.link} passHref>
                            <h2>{reading.title}</h2>
                        </Link>
                        
                        <div>
                            {reading.author.map((author, index) => (
                                <h4 key={index} className={styles.info}>
                                    {author.firstName} {author.lastName}
                                </h4>
                            ))}
                        </div>
                        <h4 className={styles.info}>{reading.date}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`https://api.ethancedwards.com/zotero/v1`)
    const readings = await res.json();

    return {
        props: {
            readings
        },
        revalidate: 3600
    }
}
