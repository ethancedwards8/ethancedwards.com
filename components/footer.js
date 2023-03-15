import Link from 'next/link';
import styles from '../styles/footer.module.scss';

export default function Footer() {
    return (
        <div>
          <footer className={styles.footer}>
            <div>&copy; Ethan Carter Edwards - <a className={styles.link} href="https://ethancedwards.com">Site</a> - <a className={styles.link} href="mailto:ethan@ethancedwards.com">Mail</a></div>
          </footer>
        </div>
    );
}
