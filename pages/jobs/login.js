import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/jobs.module.scss';

export default function Login() {

    
    return (
        <>
            <Head>
                <title>Counselor Login Page</title>
            </Head>

            <h1 className={styles.title}>Login</h1>

            <form name="login-form" className={styles.form}>
            
                <label for="username">Username: </label>
                <br/>
                <input type="text" name="username" required />

                <br/>

                <label for="password">Password: </label>
                <br/>
                <input type="password" name="password" required />

                <br/>

                <Link href="/jobs/counselor" passHref><input type="submit" value="Login" /></Link>

            </form>
        </>
    );
}



