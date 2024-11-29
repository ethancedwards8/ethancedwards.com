import Link from 'next/link';
import dayjs from 'dayjs';
import { useState } from 'react';

import styles from '../../styles/blog.module.scss';

import Representatives from '../../components/representatives.js';

export default function Congress() {
    const [address, setAddress] = useState("");
    const [rep, setRep] = useState("");

    // let rep;

    const handleSubmit = async (event) => {
        event.preventDefault()
        let res = await fetch(`https://api.ethancedwards.com/congress/v1/${address}`)
        let info = await res.json();

        setRep(info);
        console.log('we are here');

        // event.target.submit()
    }

    return (
        <>
            <h1 className={styles.header}>Welcome to Find Your Rep.</h1>
            <p className={styles.text}>To learn more about who represents you in congress, input your address below.
                Please note that inputting your full address increases accuracy.</p>
            <form onSubmit={handleSubmit} method="GET">
                <label for="address" className={styles.text}>Enter your address: </label>
                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                <input type="submit" value="Submit" />
            </form>
            <hr />
            <div> 
                { rep ? <Representatives rep={rep} /> : <div className={styles.text}> Please input an address... </div> }
            </div>

        </>
    );
}

// export async function getServerSideProps() {
//     // local development
//     // const res = { quote: "Quote", author: "Author" };
//     // const quotes = res;

//     // production
//     const res = await fetch(`https://api.ethancedwards.com/congress/v1/1600+Pennsylvania+Avenue+NW+Washington+DC+20500`);
//     const rep = await res.json();

//     return { props: { rep } };

// }
