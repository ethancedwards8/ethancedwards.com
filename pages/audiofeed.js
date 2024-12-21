import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/blog.module.scss';

export default function AudioFeed() {
    let [link, setLink] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        // so i can immediately clear the link var
        let tmp = link;
        setLink('');

        const response = await fetch(`https://api.ethancedwards.com/audiofeed/v1?link=${tmp}`, {
            method: 'POST',
        });
    }

    return (
        <>
            <Head>
                <title>Ethan's Audio Feed</title>
            </Head>

            <form onSubmit={handleSubmit} method="POST">
                <label for="link" className={styles.text}>Enter your address: </label>
                <input type="text" name="link" value={link} onChange={(e) => setLink(e.target.value)} required/>
                <input type="submit" value="Add Link" className={styles.submit} />
            </form>
        </>
    );
}
