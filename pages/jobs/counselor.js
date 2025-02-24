import Head from 'next/head';

import JobCard from '../../components/jobcard.js';

import styles from '../../styles/jobs.module.scss';

// shows only the non-approved jobs
export default function CounselorPage({ jobs }) {
    let toApprove = jobs.length > 0;

    jobs.sort((a, b) => a.approved - b.approved);

    return (
        <>
            <Head>
                <title>Counselor Page</title>
            </Head>

            <h1 className={styles.title}>Counselor Approval Page</h1>

            { toApprove ?
            <div className={styles.allJobs}>
                {jobs.map((job, index) => (
                    true ?
                    <JobCard job={job} />
                    : <></>

                ))}
            </div>
            :
            <p>There are no jobs to approve at this time</p>
            }
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
