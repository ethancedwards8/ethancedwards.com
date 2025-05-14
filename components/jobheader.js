import Link from 'next/link';
import styles from '../styles/header.module.scss';

export default function JobHeader() {


    return (
        <div>
          <nav className={styles.nav}>
            <div className={`${styles.logo} ${styles.navlink}`}><Link href="/" passHref>Ethan Carter Edwards</Link></div>
            <ul>
              <div className={styles.navlink}><li><Link href="/jobs" passHref>Jobs</Link></li></div>
              <div className={styles.navlink}><li><Link href="/jobs/login" passHref>Counselor Login</Link></li></div>
              <div className={styles.navlink}><li><Link href="/jobs/employer" passHref>Submit a Job Post</Link></li></div>
            </ul>
          </nav>
        </div>
    );
}
