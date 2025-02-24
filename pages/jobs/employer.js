import Head from 'next/head';
import { useState, useEffect } from 'react';

import styles from '../../styles/jobs.module.scss';

export default function EmployerPosting() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()

        const queryParams = new URLSearchParams([
            ["title", title],
            ["company", company],
            ["location", location],
            ["date_posted", date],
            ["custom_description", desc],
            ]).toString();

        let res = await fetch(`https://api.ethancedwards.com/jobs/v1?${queryParams}`, {
            method: 'POST',
        });

        let info = await res.json();

        setTitle('');
        setCompany('');
        setLocation('');
        setDate('');
        setDesc('');

        alert('Job Submitted! Awaiting school counselor approval.');

    }

    return (
        <>
            <Head>
                <title>Employer Page</title>
            </Head>

            <h1 className={styles.title}>Employer Job Post Page</h1>

            <div>
                <form name="job-form" onSubmit={handleSubmit} method="POST" className={styles.form}>
                    <label for="title">Job Title:</label>
                    <br/>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                    <br/>

                    <label for="company">Company:</label>
                    <br/>
                    <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} required/>

                    <br/>

                    <label for="location">Job Location:</label>
                    <br/>
                    <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required/>

                    <br/>

                    <label for="date_posted">Date Posted:</label>
                    <br/>
                    <input type="text" name="date_posted" value={date} onChange={(e) => setDate(e.target.value)} required/>

                    <br/>

                    <label for="custom_description">Optional Short Description:</label>
                    <br/>
                    <input type="text" name="custom_description" value={desc} onChange={(e) => setDesc(e.target.value)} />

                    <br/>

                    <input type="submit" value="Submit Posting" />
                </form>
            </div>
        </>
    );
}
