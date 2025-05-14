import Link from 'next/link';
import dayjs from 'dayjs';
import Head from 'next/head';

import styles from '../styles/blog.module.scss';

export default function Podcast({ projects }) {

    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>

            <div className={styles.podcast}>
                <h1 className={styles.header}>Welcome to my projects page</h1>
                <p>Here are various projects that I have worked on throughout the years. I currently maintain many of them.</p>
            </div>
            <h1 className={styles.header}>Projects:</h1>
            <div className={styles.blog}>
                {projects.map((project, index) => (
                    <div className={styles.post}>
                        <hr/>
                        <Link href={project.link} passHref>
                            <h1>{project.title}</h1>
                        </Link>

                        <div className={styles.projectgrid}>
                            <p className={styles.griditem}>{project.description}</p>

                            { project.photo ? <img className={styles.griditem} src={project.photo} alt={project.photoalt} />: <></>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getStaticProps() {
    const projects = [
        {
            "title": "Dracula Tmux",
            "description": "I maintain Dracula Tmux, a highly configurable and extensible theme for Tmux. It includes features and statuses for weather, ssh, kubernetes, Git, GPU, CPU, RAM usage, uptime, blood glucose, network, IP, and more. It is programmed in Bash.",
            "link": "https://github.com/dracula/tmux",
            "photo": "/projects/draculatmux.png",
            "photoalt": "Screenshot of the Dracula Tmux theme",
        },
        {
            "title": "Congress",
            "description": "Webapp for finding Congressmen/Senators by address and seeing their recent legislative activity, their party, their district, and their state after clicking on them. It uses the Geocodio API to turn addresses into Congressional districts and the Congress API retrieves member information from district numbers.",
            "link": "/congress",
            "photo": "/projects/congressproject.jpg",
            "photoalt": "Screenshot of the representative/senators after inputting an address",
        },
        {
            "title": "FBLA Jobs Project",
            "description": "This was my senior project for the FBLA event Website Coding & Development. This is the job listing landing page. There are also pages for counselors to approve or deny jobs and employers to submit jobs. It uses python-jobspy to scrape job information off of LinkedIn, Glassdoor, and Indeed.",
            "link": "/jobs",
            "photo": "/projects/jobslandingpage.png",
            "photoalt": "Screenshot of job listing landing page.",
        },
    ];

    return {
        props: {
            projects
        }
    };
}
