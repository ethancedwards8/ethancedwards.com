import React from 'react';
import styles from '../styles/about.module.scss';

export default function About() {
    return (
        <>
          <div className={styles.wrapper}>
            <div className={`${styles.zero} ${styles.makecenter}`}>
              <img src="/logo.jpg" alt="my logo" className={styles.logo}/>
            </div>
            <h1 className={styles.one}>About Me</h1>
            <div className={styles.two}>
              <img src="/ethanphoto.jpg" alt="me" className={styles.photo}/>
            </div>
            <div className={styles.three}>
              <p className={styles.info_text}>
                Hi, I'm Ethan. I'm a high school and part time college student,
                working during the summers, and sporadically during the school year.
                I've been using Linux since 7th grade and I've loved every second of it.
                I consider myself a Networking and Systems Administrator at heart, with modern DevOps and
                Architecture Design skills and knowledge, although I do occasionally dabble with the Software
                Engineering side of things.
              </p>
              <p className={styles.info_text}>
                Outside of the tech space, I enjoy exploring Mathematics, Chess, reading, and learning
                languages. I'm currently learning Spanish.
              </p>
              <p className={styles.info_text}>
                Additionally, I participate in many extracurricular activities through school and my community;
                I'm a year round athlete, running in the fall and spring and swimming during the summer and
                winter, competing in the VHSL State Swimming Championships for the 2022-23 year. I placed 15th, 16th, and 16th in the finals.
              </p>
              <p className={styles.info_text}>
                I'm also a member of my school's FBLA chapter, successfully qualifying for the 2022 state
                and national competition in Cybersecurity. In 2023, I won the region competition in Cybersecurity and Network Design,
                qualifying for the upcoming State competition.
              </p>
            </div>
            <h1 className={styles.four + styles.makecenter}>Beliefs and Philosophies</h1>
            <div className={styles.five}>
              <p className={styles.info_text}>
                I'm a big believer and advocate of <b><a className={styles.link} href="https://www.fsf.org">Free/Libre Software. </a></b>
                If something is deemed 'Free Software', <a className={styles.link} href="https://www.gnu.org/philosophy/free-sw.html">the users can run, copy, distribute, study, change, and
                                                          improve</a> the software. Software Freedom is defined by the <a className={styles.link} href="https://www.gnu.org/licenses/licenses.html">license.</a>
              </p>
              <p className={styles.info_text}>
                Free does NOT mean Free as in price, but Free as in Freedom, if you have Free Software, it is
                perfectly within your rights to sell it, or give it away for free, you control what you do with
                the software, that is, after all, what Freedom is all about.
              </p>
              <p className={styles.info_text}>
                It is also important to keep in mind that <a className={styles.link} href="https://www.gnu.org/philosophy/open-source-misses-the-point.en.html">Open Source, is not equal to Free Software</a>. A piece of
                Open Source software can be Free, but it is not always the case. The reverse is also true, something
                being Free Software does not mean it is Open Source. Both movements are revolutionary and beneficial
                to the average computer user or <a className={styles.link} href="https://en.wikipedia.org/wiki/Hacker_culture">hacker</a>, but it is important not to confuse them.
              </p>
            </div>
            <h1 className={styles.six}>Contact Me</h1>
            <div className={`${styles.seven} ${styles.certgrid}`}>
              <div className={styles.contacts}>
                <a href="https://twitter.com/ethancedwards"><img src="/twitter.png" alt="Twitter"/></a>
                <a href="https://www.youtube.com/channel/UCeqv2z-lyq5M0u6_RnNALBQ"><img src="/youtube.png" alt="YouTube"/></a>
                <a href="https://github.com/ethancedwards8"><img src="/github.png" alt="GitHub"/></a>
                <a href="https://gitlab.com/ethancedwards"><img src="/gitlab2.png" alt="GitLab"/></a>
                <a href="mailto:ethan@ethancedwards.com"><img src="/email.png" alt="Email"/></a>
              </div>
              <div className={styles.certifications}>
                <h1>Certifications</h1>
                <p>
                  <a className={styles.link} href="https://www.credly.com/badges/523dcce4-4cf1-4b8e-ad96-84a31f1ccb14/public_url">GitLab Certified Git Associate</a>
                </p>
                <p>
                  CompTIA A+
                </p>
              </div>
            </div>
          </div>
        </>
    );
};
