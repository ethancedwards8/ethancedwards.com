import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">

          <Head>
            <link rel="icon" href="/favicon.png" type="image/png" sizes="260x260" />

            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          </Head>

          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    );
}
