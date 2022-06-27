import React from 'react';

import Navbar from '../components/header.js';

import Link from 'next/link';

export default function Home({ quotes }) {

    console.log(quotes);

    return (
        <div className="App">

          <h1>Welcome to my website! Visit the about page for more information about me.</h1>
          <p>This site is a work in progress, visit again to see it updated!</p>

          <hgroup>
            <h1 id="quote">"{quotes.quote}"</h1>
            <h2 id="author">{quotes.author}</h2>
          </hgroup>

        </div>
    );
}

// export async function getServerSideProps() {
export async function getStaticProps() {
    const res = await fetch(`https://api.ethancedwards.com/quotes/v1`);
    const quotes = await res.json();

    return { props: { quotes } };
}
