import React from 'react';
import './About.css';

import photo from '../images/ethanphoto.jpg';
import logo from '../images/logo.jpg';

import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import gitlab from '../images/gitlab2.png';
import github from '../images/github.png';
import mail from '../images/email.png';

const About = () => {
    return (
        <div className="wrapper">
          <div className="zero makecenter">
            <img src={logo} alt="my logo" className="logo"/>
          </div>
          <h1 className="one">About Me</h1>
          <div className="two">
            <img src={photo} alt="me" className="photo"/>
          </div>
          <div className="three">
            <p className="info-text">
              Hi, I'm Ethan. I'm a high school and part time college student,
              working during the summers, and sporadically during the school year.
              I've been using Linux since 7th grade and I've loved every second of it.
              I consider myself a Networking and Systems Administrator at heart, with modern DevOps and
              Architecture Design skills and knowledge, although I do occasionally dabble with the Software
              Engineering side of things.
            </p>
            <p className="info-text">
              Outside of the tech space, I enjoy exploring Mathematics, reading, and learning
              languages. I'm currently learning Spanish.
            </p>
            <p className="info-text">
              Additionally, I participate in many extracurricular activities through school and my community;
              I'm a year round athlete, running in the fall and spring and swimming during the summer and
              winter. I'm also a member of my school's FBLA chapter, successfully qualifying for the 2022 state
              and national competition in Cybersecurity.
            </p>
          </div>
          <h1 className="four makecenter">Beliefs and Philosophies</h1>
          <div className="five">
            <p className="info-text">
              I'm a big believer and advocate of <b><a href="https://www.fsf.org">Free/Libre Software. </a></b>
              If something is deemed 'Free Software', <a href="https://www.gnu.org/philosophy/free-sw.html">the users can run, copy, distribute, study, change, and
              improve</a> the software. Software Freedom is defined by the <a href="https://www.gnu.org/licenses/licenses.html">license.</a>
            </p>
            <p className="info-text">
              Free does NOT mean Free as in price, but Free as in Freedom, if you have Free Software, it is
              perfectly within your rights to sell it, or give it away for free, you control what you do with
              the software, that is, after all, what Freedom is all about.
            </p>
            <p className="info-text">
              It is also important to keep in mind that <a href="https://www.gnu.org/philosophy/open-source-misses-the-point.en.html">Open Source, is not equal to Free Software</a>. A piece of
              Open Source software can be Free, but it is not always the case. The reverse is also true, something
              being Free Software does not mean it is Open Source. Both movements are revolutionary and beneficial
              to the average computer user or hacker, but it is important not to confuse them.
            </p>
          </div>
          <h1 className="six">Contact Me</h1>
          <div className="seven">
            <a href="https://twitter.com/ethancedwards"><img src={twitter} alt="Twitter"/></a>
            <a href="https://www.youtube.com/channel/UCeqv2z-lyq5M0u6_RnNALBQ"><img src={youtube} alt="YouTube"/></a>
            <a href="https://github.com/ethancedwards8"><img src={github} alt="GitHub"/></a>
            <a href="https://gitlab.com/ethancedwards"><img src={gitlab} alt="GitLab"/></a>
            <a href="mailto:ethan@ethancedwards.com"><img src={mail} alt="Email"/></a>
          </div>
        </div>
    );
};

export default About;
