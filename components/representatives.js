import styles from '../styles/blog.module.scss';

export default function Representatives({ rep }) {
    try {
        // <!-- only display senators if they exist for the address -->
        let hasSenators = rep.hasOwnProperty("senate1")
        return (
            <>
                <h1 className={styles.header}>{rep.house.state} {rep.name} Representatives:</h1>
                <div className={styles.blog}>
                    <div className={styles.repInfo} style={{borderColor: (rep.house.bio.party == "Republican") ? "red" : "blue"}}>
                        <img src={rep.house.picture} alt="" className={styles.photo} />
                        <h2 className={styles.text}>{rep.house.type} {rep.house.bio.full_name} - {rep.house.bio.party}</h2>
                    </div>
                    { hasSenators ? 
                        <div>
                            <div className={styles.repInfo} style={{borderColor: (rep.senate1.bio.party == "Republican") ? "red" : "blue"}}>
                                <img src={rep.senate1.picture} alt="" className={styles.photo} />
                                <h2 className={styles.text}>{rep.senate1.type} {rep.senate1.bio.full_name} - {rep.senate1.bio.party}</h2>
                            </div>
                            <div className={styles.repInfo} style={{borderColor: (rep.senate2.bio.party == "Republican") ? "red" : "blue"}}>
                                <img src={rep.senate2.picture} alt="" className={styles.photo} />
                                <h2 className={styles.text}>{rep.senate2.type} {rep.senate2.bio.full_name} - {rep.senate2.bio.party}</h2>
                            </div>
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
            <> </>
        );
    }
}
