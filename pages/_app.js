import Head from 'next/head';

import Header from '../components/header.js';

import '../styles/main.css';
import '../styles/about.css';
import '../styles/index.css';
import '../styles/header.css';


export default function MyApp({ Component, pageProps }) {
    return (
        <div className="App">
          <Header />

          <Head>

            <meta charSet="utf-8" />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />

            <title>Ethan Carter Edwards</title>
          </Head>

          <Component {...pageProps} />
        </div>
    );
}