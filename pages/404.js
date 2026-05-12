import Link from 'next/link';
import styles from '../styles/404.module.scss';

export default function Custom404() {
    return (
        <>
          <div className={styles.wrapper}>
            <h1>404</h1>
            <h2>Sorry, page not found</h2>
            <h3><Link href="/" passHref>Return Home</Link></h3>
          </div>
        </>
    );
}
