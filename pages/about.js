import React from 'react';
import styles from '../styles/about.module.scss';
import Head from 'next/head';

import { NextSeo } from 'next-seo';

export default function About() {
    return (
        <>
          <NextSeo
            title="About"
            openGraph={{
              url: 'https://ethancedwards.com/about',
            }}
          />

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
                Hi, I'm Ethan. I'm a student from rural Appalachia studying CS
                and Philosophy at Harvard University. I am particularly
                interested in computer systems, infrastructure,
                and moral philosophy. I am always looking for opportunities at the intersection of these
                interests.
              </p>
              <p className={styles.info_text}>
                Outside of the classroom, I am interested in a broad range of subjects varying from local
                history, to Amateur Radio, to open source software development.
                I spend much of my free time contributing to <a href="https://github.com/nixos/nixpkgs">NixOS/Nixpkgs</a>,
                where I maintain 400+ packages and work on the CUDA, macOS/Darwin, NGI,
                and modernization efforts. I'm driven to contribute by my belief
                in <a href="https://www.gnu.org/philosophy/free-sw.html">FLOSS software</a>.
                On campus, I help run the <a href="https://hsrg.dev/">Harvard Systems Reading Group</a>.
                Lately, I've also become increasingly interested in the topic of AI safety.
              </p>
                <h1 className={styles.four + styles.makecenter}>The Ridge Podcast</h1>
                <p className={styles.info_text}>
                    I hosted <a className={styles.link}
                    href="https://theridgepodcast.com">The Ridge Podcast</a> where I
                    interviewed local Appalachians from where I grew up. I interviewed
                    more than 100 teachers, historians, journalists,
                    politicians, musicians, writers, and more. Check it out!
                </p>
              <div className={styles.eight + styles.makecenter}>
                <h1>Philanthropy</h1>
                <p className={styles.info_text}>I have <a href="https://www.givingwhatwecan.org/">pledged </a>
                    to donate at least 1% of my income to charity as a student and
                    at least 10% after I enter the workforce to causes that I have identified as doing cost-effective good.
                    I encourage others to consider doing the same.
                    Let's do some good <i>Pro Humanitate</i>.</p>
              </div>
            </div>
            <h1 className={styles.six}>Contact Me</h1>
            <div className={`${styles.seven} ${styles.certgrid}`}>
              <div className={styles.contacts}>
                <a href="https://www.linkedin.com/in/ethancedwards8/"><img src="/linkedin.png" alt="LinkedIn"/></a>
                <a href="https://github.com/ethancedwards8"><img src="/github.png" alt="GitHub"/></a>
                <a href="https://gitlab.com/ethancedwards"><img src="/gitlab2.png" alt="GitLab"/></a>
                <a href="mailto:ethan@ethancedwards.com"><img src="/email.png" alt="Email"/></a>
                <a href="/latex/resume.pdf"><p>Resume</p></a>
                <a href="/latex/cv.pdf"><p>CV</p></a>
                <p>GPG: 2E51 F618 39D1 FA94 7A73 00C2 34C0 4305 D581 DBFE</p>
              </div>
            </div>
          </div>
        </>
    );
};
