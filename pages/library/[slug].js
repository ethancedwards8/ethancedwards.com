import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';
import React from 'react';

import { NextSeo } from 'next-seo';

import Reading from '../../components/reading.js';

import styles from '../../styles/blog.module.scss';


export default function AI({ library }) {

    console.log(library);
    const readings = library.list;

    let sortedreadings = readings.sort((reading1, reading2) => (dayjs(reading1.dateAdded).isAfter(reading2.dateAdded) ? -1 : 1))

    return (
        <>
          <NextSeo
            title={library.name}
            description={library.name}
            openGraph={{
              url: `https://ethancedwards.com/library/${library.slug}`,
            }}
          />

            <h1 className={styles.header}>{library.name}</h1>
            <div className={styles.podcast}>
                <p>{library.description}</p>
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

export async function getStaticPaths() {
    const res = await fetch(`https://api.ethancedwards.com/zotero/v1/libraries`)
    const libraries = await res.json();

    const mapping = Object.values(libraries);

    console.log(mapping);

    const paths = mapping.map(library => ({
        params: {
            slug: library.slug
        }
    }));

    return {
        paths,
        fallback: false
    };

}

export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(`https://api.ethancedwards.com/zotero/v1?library=${slug}`)
    const library = await res.json();

    return {
        props: {
            library
        },
        revalidate: 1800
    }
}
