import Head from 'next/head';

import JobCard from '../../components/jobcard.js';

// shows only the non-approved jobs
export default function CounselorPage({ jobs }) {
    return (
        <>
            <Head>
                <title>Counselor Page</title>
            </Head>

            <div>
                {jobs.map((job, index) => (
                    !job.approved ?
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
