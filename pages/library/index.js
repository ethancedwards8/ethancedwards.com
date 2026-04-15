import Link from 'next/link';

import { NextSeo } from 'next-seo';

import styles from '../../styles/blog.module.scss';

export default function Library({ libraries }) {
    const description = "Here is a non-exhaustive list of things I've been reading lately, loosely sorted by section.";

    const mapping = Object.entries(libraries).map(([id, item]) => ({
        id,
        ...item
    }));


    return (
        <>
            <NextSeo
              title="Library"
              description={description}
              openGraph={{
                url: 'https://ethancedwards.com/projects',
              }}
            />


            <div className={styles.podcast}>
                <h1 className={styles.header}>Welcome to my virtual library.</h1>
                <p>{description}</p>
            </div>
            <h1 className={styles.header}>Libraries:</h1>
            <div className={styles.blog}>
                {mapping.map((library, index) => (
                    <div key={index} className={styles.post}>
                        <hr/>
                        <Link href={'/library/' + library.slug} passHref>
                            <h1>{library.name}</h1>
                        </Link>
                        <p>{library.description}</p>
                    </div>
                ))}
            </div>

        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`https://api.ethancedwards.com/zotero/v1/libraries`)
    const setlibraries = await res.json();

    const libraries = setlibraries;

    return {
        props: {
            libraries
        },
        revalidate: 86400
    }
}
