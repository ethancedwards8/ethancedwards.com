import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../styles/congress.module.scss';

export default function LearnMore({ repInfo }) {
    let billArray = repInfo.sponsoredLegislation.recent.concat(repInfo.cosponsoredLegislation.recent);
    billArray = billArray.sort((a, b) => b.introducedDate - a.introducedDate)
    billArray.length = 6;

    return (
        <>
            <Head>
                <title>{repInfo.type} {repInfo.directOrderName}</title>
            </Head>
            <div className={styles.infoPage}>
                <img src={repInfo.depiction.imageUrl} alt="" className={styles.photo} />
                <div className={styles.infoCentral}>
                    <h1>{repInfo.type} {repInfo.directOrderName}</h1>
                    <p>{repInfo.partyHistory[0].partyName} Party - {repInfo.state}</p>
                    <h2>Lawmaking Information:</h2>
                    <div>
                        <p>Bills Sponsored: {repInfo.sponsoredLegislation.count}</p>
                        <p>Bills Co-Sponsored: {repInfo.cosponsoredLegislation.count}</p>
                    </div>
                </div>
                <div className={styles.servingSince}>
                    <div className={styles.box}>
                        <h2>Office Term:</h2>
                        <p>{repInfo.state} {repInfo.type} since {repInfo.typeSince}</p>
                    </div>
                </div>

                <h3>Recent Bills:</h3>
                <div className={styles.recentLegislation}>
                    {billArray.map((bill) => (
                        <div><b>{bill.type} {bill.number}</b> {bill.title}</div>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps({ params: { repID } }) {
    const res = await fetch(`https://api.ethancedwards.com/congress/v1/member/${repID}`);
    const repInfo = await res.json();

    return {
        props: {
            repInfo
        }
    }
}
