import styles from '../styles/congress.module.scss';
import Link from 'next/link';

function Card({ individual }) {
    return (
        <>
            <Link href={{ pathname: `/congress/${individual.references.bioguide_id}`}} className={styles.link}>
            <div className={styles.repInfo} style={{borderColor: (individual.bio.party == "Republican") ? "red" : "blue"}}>
                <img src={individual.picture} alt="" className={styles.photo} />
                <div className={styles.text}>
                    <Link href={{ pathname: `/congress/${individual.references.bioguide_id}` }} className={styles.link}><h2>{individual.type} {individual.bio.full_name}</h2></Link>
                    <p>Party: {individual.bio.party}</p>
                    <p>Serving since: {individual.typeSince}</p>
                    <p>Bills Sponsored: {individual.sponsoredLegislationCount}</p>
                    <p>Bills Cosponsored: {individual.cosponsoredLegislationCount}</p>
                </div>
            </div>
            </Link>
        </>
    );
}

export default function Representatives({ rep }) {
    try {
        // <!-- only display senators if they exist for the address -->
        let hasSenators = rep.hasOwnProperty("senate1")

        return (
            <>
                <h1 className={styles.header}>{rep.house.state} {rep.name} Representatives:</h1>
                <div className={styles.allReps}>
                    <Card individual={rep.house} />
                    { hasSenators ? <Card individual={rep.senate1} /> : <></> }
                    { hasSenators ? <Card individual={rep.senate2} /> : <></> }
                </div>
            </>
        );
    // return emptiness if no rep is passed through
    } catch(err) {
        return (
            <> Sorry, try another address </>
        );
    }
}
