import Head from 'next/head';

import { usePathname } from 'next/navigation'

import Header from '../components/header.js';

import '../styles/all.scss';

export default function MyApp({ Component, pageProps }) {

    const pathname = usePathname()

    let inJobs = pathname.includes("jobs");

    return (
        <>
            <a rel="me" href="https://fosstodon.org/@ethancedwards"></a>
            <div className="App">
              {!inJobs ? <Header /> : <></> }
    
              <Head>
    
                <meta charSet="utf-8" />
    
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="me" href="https://fosstodon.org/@ethancedwards" />
    
                <title>Ethan Carter Edwards</title>
              </Head>
    
              <Component {...pageProps} />
    
            </div>
        </>
    );
}
