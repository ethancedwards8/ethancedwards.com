import Head from 'next/head';

import JobCard from '../../components/jobcard.js';

import styles from '../../styles/jobs.module.scss';

// shows only the approved jobs
export default function Jobs({ jobs }) {
    return (
        <>
            <Head>
                <title>Job Board</title>
            </Head>

            <h1> Jobs </h1>

            <div className={styles.allJobs}>
                {jobs.map((job, index) => (
                    job.approved ?
                    <JobCard job={job} />
                    : <></>
                ))}
            </div>
        </>
    );
}

export async function getServerSideProps() {
    let final;
    let jobs;

    await fetch(`https://api.ethancedwards.com/jobs/v1`).then((res) => {
        if (!res.ok) {
            // TODO: make fake job saying error
            // final = { }
        } else {
            final = res.json();
        }
    });

    jobs = await final;

    return { props: { jobs } };
}
