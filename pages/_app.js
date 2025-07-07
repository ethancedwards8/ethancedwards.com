import Head from 'next/head';

import { usePathname } from 'next/navigation'
import { DefaultSeo } from 'next-seo';

import Header from '../components/header.js';
import JobHeader from '../components/jobheader.js';

import '../styles/all.scss';

export default function MyApp({ Component, pageProps }) {

    const pathname = usePathname()
    const description = "Ethan is an EE/CS student at Harvard.";

    let inJobs = pathname.includes("jobs");

    return (
        <>
            <DefaultSeo
              titleTemplate="%s | Ethan Carter Edwards"
              defaultTitle="Ethan Carter Edwards"
              description={description}
              canonical="https://ethancedwards.com"
              openGraph={{
                title: '%s | Ethan Carter Edwards',
                type: 'website',
                locale: 'en_US',
                url: 'https://ethancedwards.com',
                siteName: 'Ethan Carter Edwards',
                description,
              }}
              twitter={{
                handle: '@ethancedwards',
                cardType: 'summary_large_image',
              }}
              additionalLinkTags={[
                {
                  rel: 'icon',
                  href: '/favicon.png',
                  type: 'image/png',
                  sizes: 'any',
                },
              ]}
            />

            <a rel="me" href="https://fosstodon.org/@ethancedwards"></a>
            <div className="App">
              {!inJobs ? <Header /> : <JobHeader /> }
    
              <Head>
    
                <meta charSet="utf-8" />
    
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="me" href="https://fosstodon.org/@ethancedwards" />
              </Head>
    
              <Component {...pageProps} />
    
            </div>
        </>
    );
}
