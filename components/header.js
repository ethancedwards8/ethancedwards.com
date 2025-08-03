import Link from 'next/link';
import styles from '../styles/header.module.scss';

export default function Header() {
    return (
        <div>
          <nav className={styles.nav}>
            <div className={`${styles.logo} ${styles.navlink}`}><Link href="/" passHref>Ethan Carter Edwards</Link></div>
            <ul>
              <div className={styles.navlink}><li><Link href="/" passHref>Home</Link></li></div>
              <div className={styles.navlink}><li><Link href="/blog" passHref>Blog</Link></li></div>
              <div className={styles.navlink}><li><Link href="/podcast" passHref>Podcast</Link></li></div>
              <div className={styles.navlink}><li><Link href="/projects" passHref>Projects</Link></li></div>
              <div className={styles.navlink}><li><Link href="/gallery" passHref>Gallery</Link></li></div>
              <div className={styles.navlink}><li><Link href="/about" passHref>About</Link></li></div>
            </ul>
          </nav>
        </div>
    );
}
