import React from 'react';
import styles from '../styles/about.module.scss';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>

          <div className={styles.wrapper}>
            <div className={`${styles.zero} ${styles.makecenter}`}>
              <img src="/logo.jpg" alt="my logo" className={styles.logo}/>
            </div>
            <h1 className={styles.one}>About Me</h1>
            <div className={styles.two}>
              <img src="/EthanSuitSteps.jpg" alt="me" className={styles.photo}/>
            </div>
            <div className={styles.three}>
              <p className={styles.info_text}>
                Hi, I'm Ethan. I'm a recent high school and community college graduate in rural Appalachia 
                and an incoming student at Harvard University.
                I work for my school's IT department and do some freelancing on the side.
                I recently started work at the Summer of Nix 2025 program.
                My latest interest is Amateur Radio. I enjoy CW, POTA, and DX.
                Additionally, I am an avid Linux user and have been since early 2020. My experiences
                with Linux and other FLOSS software has influenced my belief in <a className={styles.link} href="https://www.gnu.org/philosophy/free-sw.html">Free/Libre Software. </a>
                I encourage you to checkout my <a className={styles.link} href="https://github.com/ethancedwards8">GitHub page</a> for an overview of the projects I work on.
              </p>
              <p className={styles.info_text}>
                Outside of the tech space,  I hope to use my experience and skills as a communicator to bridge
                the gap between science and society. I have a keen interest in political philosophy, economics,
                history, literature, language, and religion. I believe books help us ask the important questions
                and teach us to critically analyze the world around us. Being fluent in both English and Spanish
                helps me connect with those from other cultures and understand them better.
              </p>
                <h1 className={styles.four + styles.makecenter}>The Ridge Podcast</h1>
                <p className={styles.info_text}>
                  I host <a className={styles.link} href="https://theridgepodcast.com">The Ridge Podcast</a> where I interview local Appalachians. At the time of writing this,
                  there are more than 95 published interviews with teachers, historians, politicians, musicians, writers, and more. Check it out!
                </p>
            </div>
            <h1 className={styles.six}>Contact Me</h1>
            <div className={`${styles.seven} ${styles.certgrid}`}>
              <div className={styles.contacts}>
                <a href="https://www.linkedin.com/in/ethancedwards8/"><img src="/linkedin.png" alt="LinkedIn"/></a>
                <a href="https://github.com/ethancedwards8"><img src="/github.png" alt="GitHub"/></a>
                <a href="https://gitlab.com/ethancedwards"><img src="/gitlab2.png" alt="GitLab"/></a>
                <a href="mailto:ethan@ethancedwards.com"><img src="/email.png" alt="Email"/></a>
                <p>GPG: 2E51 F618 39D1 FA94 7A73 00C2 34C0 4305 D581 DBFE</p>
              </div>
              <div className={styles.certifications}>
                <h1>Certifications</h1>
                <p>
                  <a className={styles.link} href="https://www.credly.com/badges/ba212fd6-4840-4395-a672-7df371342fe6">CompTIA Security+</a>
                </p>
                <p>
                  <a className={styles.link} href="https://www.credly.com/badges/d9c44e5d-ef50-48aa-8a2b-46f793609745">CompTIA A+</a>
                </p>
                <p>
                  <a className={styles.link} href="https://www.credly.com/badges/98fa5101-a798-47da-9d26-477f38dbcb9d">(ISC)2 Certified in Cybersecurity (CC)</a>
                </p>
                <p>
                  <a className={styles.link} href="https://www.credly.com/badges/523dcce4-4cf1-4b8e-ad96-84a31f1ccb14">GitLab Certified Git Associate</a>
                </p>
              </div>
            </div>
          </div>
        </>
    );
};
