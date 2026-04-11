import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';
import React from 'react';

import { NextSeo } from 'next-seo';

import Reading from '../../components/reading.js';

import styles from '../../styles/blog.module.scss';


export default function AI({ readings }) {

    const description = `I'm becoming increasingly convinced that the
    advancement and development of AI is the most important technological
    innovation in human history, for better or for worse. I'm also convinced
    that how we grow, change, and adapt to it is the most important question
    we face as a society. This list is meant to be the starting point for how
    I think about the kinds of issues humanity will face in the prescence of
    real Artificial Intelligence and how we can learn from history to protect
    ourselves.

    I have read everything on this list. I may write start writing some about
    what I read, too.

    Disclaimer: I don't agree with everything listed below or disagree with
    everything listed below. I will read anything and everything, and this is
    just a list. Please send me more things to read! :)`;

    let sortedreadings = readings.sort((reading1, reading2) => (dayjs(reading1.dateAdded).isAfter(reading2.dateAdded) ? -1 : 1))

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
                    <React.Fragment key={index}>
                        <Reading reading={reading} />
                    </React.Fragment>
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
