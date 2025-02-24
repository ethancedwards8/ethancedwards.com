import Link from 'next/link';

import styles from '../styles/jobs.module.scss';

import { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation'

export default function JobCard({ job }) {
    let inCounselor = usePathname().includes("counselor");

    const handleSubmitDelete = async (event) => {
        event.preventDefault()

        const queryParams = new URLSearchParams([
            ["id", job.id],
        ]).toString();


        let res = await fetch(`https://api.ethancedwards.com/jobs/v1?${queryParams}`, {
            method: 'DELETE',
        });

        let info = await res.json();

        alert('Job deletd!');

        location.reload();
    }

    const handleSubmitApprove = async (event) => {
        event.preventDefault()

        const queryParams = new URLSearchParams([
            ["id", job.id],
            ["approved", true],
        ]).toString();


        let res = await fetch(`https://api.ethancedwards.com/jobs/v1?${queryParams}`, {
            method: 'PATCH',
        });

        let info = await res.json();

        alert('Job Approved!');

        location.reload();
    }

    return (
        <>
            <div className={styles.jobInfo}>
                { inCounselor ?
                    <p>Status: {job.approved ? "Approved" : "Not Approved"}</p>
                    : <></> }

                { job.job_url ?

                <Link href={job.job_url}><h2>{job.title}</h2></Link>
                    :
                <h2>{job.title}</h2> }

                <h3>{job.company}</h3>
                <h4>{job.location}</h4>
                <h4>Date Posted: {job.date_posted}</h4>

                { inCounselor ?

                <>
                    { !job.approved ?
                    <form name="delete-form" onSubmit={handleSubmitApprove} method="PATCH">

                        <input type="submit" value="Approve Posting" />

                    </form>
                    : <></> }

                    <form name="delete-form" onSubmit={handleSubmitDelete} method="DELETE">

                        <input type="submit" value="Delete Posting" />

                    </form>
                </>
                : <></>
                }
            </div>
        </>
    )
}
