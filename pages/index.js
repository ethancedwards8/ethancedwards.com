import React from 'react';
import Link from 'next/link';

import Navbar from '../components/header.js';

import styles from '../styles/index.module.scss';

export default function Home({ quotes }) {

    console.log(quotes);

    return (
        <div className={styles.App}>

          <h1>Welcome to my website! Visit the about page for more information about me.</h1>
          <p>This site is a work in progress, visit again to see it updated!</p>

          <hgroup>
            <h1 id="quote">"{quotes.quote}"</h1>
            <h2 id="author">- {quotes.author}</h2>
          </hgroup>

        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.ethancedwards.com/quotes/v1`);
    const quotes = await res.json();

    return { props: { quotes } };
}
