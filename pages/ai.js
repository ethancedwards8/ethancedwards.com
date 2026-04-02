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
                                <h4 className={styles.info}>
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

    // const readings = [
    //     {
    //         "title": "Machines of Loving Grace",
    //         "author": "Dario Amodei",
    //         "date": "October 2024",
    //         "link": "https://darioamodei.com/essay/machines-of-loving-grace",
    //     },
    //     {
    //         "title": "The Adolescence of Technology",
    //         "author": "Dario Amodei",
    //         "link": "https://darioamodei.com/essay/the-adolescence-of-technology",
    //         "date": "January 2026"
    //     },
    //     {
    //         "title": "On DeepSeek and Export Controls",
    //         "author": "Dario Amodei",
    //         "link": "https://darioamodei.com/post/on-deepseek-and-export-controls",
    //         "date": "January 2025"
    //     },
    //     {
    //         "title": "The Urgency of Interpretability",
    //         "author": "Dario Amodei",
    //         "link": "https://darioamodei.com/post/the-urgency-of-interpretability",
    //         "date": "April 2025"
    //     },
    //     {
    //         "title": "Thoughts on slowing the fuck down",
    //         "author": "Mario Zechner",
    //         "link": "https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/",
    //         "date": "2026-03-25"
    //     },
    //     {
    //         "title": "Why the Future Doesn't Need Us",
    //         "author": "Bill Joy",
    //         "link": "https://sites.cc.gatech.edu/computing/nano/documents/Joy%20-%20Why%20the%20Future%20Doesn%27t%20Need%20Us.pdf",
    //         "date": "April 2000"
    //     },
    //     {
    //         "title": "Lena",
    //         "author": "qntm",
    //         "link": "https://qntm.org/mmacevedo",
    //         "date": "2021-01-04"
    //     },
    //     {
    //         "title": "Darwin Among the Machines",
    //         "author": "Samuel Butler",
    //         "link": "https://mediarep.org/server/api/core/bitstreams/e0da505d-200c-43ab-be4b-6604a4df816f/content",
    //         "date": "13 June, 1863"
    //     },
    //     {
    //         "title": "Einstein–Szilard letter",
    //         "author": "Albert Einstein",
    //         "link": "https://www.atomicarchive.com/resources/documents/beginnings/einstein.html",
    //         "link2": "https://en.wikipedia.org/wiki/Einstein%E2%80%93Szilard_letter",
    //         "date": "August 2nd, 1939"
    //     },
    //     // {
    //     //     "title": "https://www.wheresyoured.at/",
    //     //     "author": "",
    //     //     "link": "",
    //     //     "date": ""
    //     // },
    //     // {
    //     //     "title": "",
    //     //     "author": "",
    //     //     "link": "",
    //     //     "date": ""
    //     // },
    // ];

    return {
        props: {
            readings
        },
        revalidate: 3600
    }
}
