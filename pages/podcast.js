import Link from 'next/link';

import styles from '../styles/blog.module.scss';

export default function Blog({ data }) {

    return (
        <>
            <h1 className={styles.header}>List of episodes:</h1>
            <div className={styles.blog}>This page is a work in progres! Check back later for a list of all episodes</div>
        </>
    );
}

