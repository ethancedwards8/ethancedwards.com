import JobCard from '../components/jobcard.js';

import styles from '../styles/jobs.module.scss';

export default function Podcast({ jobs }) {
    return (
        <div className={styles.allJobs}>
            {jobs.map((job, index) => (
                <JobCard job={job} />
            ))}
        </div>
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
