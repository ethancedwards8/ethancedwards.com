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

          <Component {...pageProps} />
        </div>
    );
}
