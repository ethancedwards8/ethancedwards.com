import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';
import { useState } from 'react';

import { NextSeo } from 'next-seo';

import styles from '../styles/blog.module.scss';

export default function AudioFeed() {
    let [pr, setPR] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        // so i can immediately clear the link var
        let tmp = pr;
        setPR('');

        const response = await fetch(`https://api.ethancedwards.com/nixpkgs/v1?pr_num=${tmp}`, {
            method: 'POST',
        });
    }

    return (
        <>
          <NextSeo
            title="Ethan's GHA Automation"
            noindex={true}
            nofollow={true}
            openGraph={{
              url: 'https://ethancedwards.com/nixpkgs-gha',
            }}
          />

            <form onSubmit={handleSubmit} method="POST">
                <label for="pr" className={styles.text}>Enter your PR: </label>
                <input type="text" name="pr" value={pr} onChange={(e) => setPR(e.target.value)} required/>
                <input type="submit" value="Add PR" className={styles.submit} />
            </form>
        </>
    );
}
