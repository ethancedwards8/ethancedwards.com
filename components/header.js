import Link from 'next/link';
import styles from '../styles/header.module.scss';

export default function Header() {
    return (
        <div>
          <nav className={styles.nav}>
            <div className={`${styles.logo} ${styles.navlink}`}><Link href="/" passHref><a>Ethan Carter Edwards</a></Link></div>
            <ul>
              <div className={styles.navlink}><li><Link href="/" passHref><a>Home</a></Link></li></div>
              <div className={styles.navlink}><li><Link href="/blog" passHref><a>Blog</a></Link></li></div>
              <div className={styles.navlink}><li><Link href="/podcast" passHref><a>The Ridge Podcast</a></Link></li></div>
              <div className={styles.navlink}><li><Link href="/about" passHref><a>About</a></Link></li></div>
            </ul>
          </nav>
        </div>
    );
}
