import Link from 'next/link';

export default function Custom404() {
    return (
        <>
          <h1>404 - Sorry, Page Not Found</h1>
          <p><Link href="/"><a>Home</a></Link></p>
        </>
    );
}
