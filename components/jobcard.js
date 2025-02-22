import Link from 'next/link';

import styles from '../styles/jobs.module.scss';

export default function JobCard({ job }) {
    return (
        <>
            <div className={styles.jobInfo}>
                <Link href={job.job_url}><h2>{job.title}</h2></Link>
                <h3>{job.company}</h3>
                <h4>{job.location}</h4>
                <h4>Date Posted: {job.date_posted}</h4>
            </div>
        </>
    )
}
