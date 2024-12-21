import Link from 'next/link';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../../styles/congress.module.scss';

import Representatives from '../../components/representatives.js';

export default function Congress() {
    const [address, setAddress] = useState("");
    const [rep, setRep] = useState("");
    const router = useRouter();
    const { query } = router;

    // let rep;

    const handleSubmit = async (event) => {
        event.preventDefault()
        let res = await fetch(`https://api.ethancedwards.com/congress/v1/address/${address}`)
        let info = await res.json();

        // puts the address parameter into the URL
        const queryParams = new URLSearchParams(`address=${address}`).toString();
        router.push(`/congress?${queryParams}`);


        setRep(info);
    }

    useEffect(() => {
        if (query.address) {
            setAddress(query.address);
        }
    }, [query]);

    return (
        <>
            <Head>
                <title>Congress</title>
            </Head>


            <h1 className={styles.header}>Welcome to Find Your Reps.</h1>
            <p className={styles.text}>To learn more about who represents you in congress, input your address below.
                Please note that inputting your full address increases accuracy.</p>
            <p className={styles.text}>After the search returns, click on any one of your reps to see more information on them</p>
            <form onSubmit={handleSubmit} method="GET">
                <label for="address" className={styles.text}>Enter your address: </label>
                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                <input type="submit" value="Search Address" className={styles.submit} />
            </form>
            <hr />

            <div> 
                { rep ? <Representatives rep={rep} /> : <div className={styles.text}> Please input an address... </div> }
            </div>

        </>
    );
}
