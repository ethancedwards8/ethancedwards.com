import styles from '../styles/congress.module.scss';

function Card({ individual }) {
    return (
        <>
            <div className={styles.repInfo} style={{borderColor: (individual.bio.party == "Republican") ? "red" : "blue"}}>
                <img src={individual.picture} alt="" className={styles.photo} />
                <div className={styles.text}>
                    <p>{individual.type} {individual.bio.full_name} - {individual.bio.party}</p>
                    <p>{individual.typeSince} - Current</p>
                </div>
            </div>
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
                <div>
                    <Card individual={rep.house} />
                    { hasSenators ? 
                        <div>
                            <Card individual={rep.senate1} />
                            <Card individual={rep.senate2} />
                        </div>
                        :
                        <></>
                    }
                </div>
            </>
        )
    // return emptiness if no rep is passed through
    } catch(err) {
        return (
            <> Sorry, try another address </>
        );
    }
}
