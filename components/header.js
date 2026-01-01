import Link from 'next/link';
import styles from '../styles/header.module.scss';

export default function Header() {
    return (
        <div>
          <nav className={styles.nav}>
            <div className={`${styles.logo} ${styles.navlink}`}><Link href="/" passHref>Ethan Carter Edwards</Link></div>
            <ul>
              <li className={styles.navlink}><Link href="/" passHref>Home</Link></li>
              <li className={styles.navlink}><Link href="/blog" passHref>Blog</Link></li>
              <li className={styles.navlink}><Link href="/podcast" passHref>Podcast</Link></li>
              <li className={styles.navlink}><Link href="/projects" passHref>Projects</Link></li>
              <li className={styles.navlink}><Link href="/about" passHref>About</Link></li>
            </ul>
          </nav>
        </div>
    );
}
