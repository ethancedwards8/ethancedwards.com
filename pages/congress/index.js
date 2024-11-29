import Link from 'next/link';
import dayjs from 'dayjs';
import { useState } from 'react';

import styles from '../../styles/blog.module.scss';

export default function Congress({ rep }) {
    // <!-- only display senators if they exist for the address -->
    let hasSenators = rep.hasOwnProperty("senate1")

    // const [address, setAddress] = useState("");

    // const search = (formData) => {
    //     formData.prevent
    //     const query = formData.get("query");
    //     alert(`You searched for '${query}'`);
    // }

    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        let res = fetch(`https://api.ethancedwards.com/congress/v1/${address}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                event.target.submit()
        })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your address:
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </label>
            </form>
        </>
    );
            // <h1 className={styles.header}>{rep.house.state} {rep.name} Representatives:</h1>
            // <div className={styles.blog}>
            //     <div className={styles.repInfo} style={{borderColor: (rep.house.bio.party == "Republican") ? "red" : "blue"}}>
            //         <h2>{rep.house.type} {rep.house.bio.full_name} - {rep.house.bio.party}</h2>
            //     </div>
            //     { hasSenators ? 
            //         <div>
            //             <div className={styles.repInfo} style={{borderColor: (rep.senate1.bio.party == "Republican") ? "red" : "blue"}}>
            //                 <h2>{rep.senate1.type} {rep.senate1.bio.full_name} - {rep.senate1.bio.party}</h2>
            //             </div>
            //             <div className={styles.repInfo} style={{borderColor: (rep.senate2.bio.party == "Republican") ? "red" : "blue"}}>
            //                 <h2>{rep.senate2.type} {rep.senate2.bio.full_name} - {rep.senate2.bio.party}</h2>
            //             </div>
            //         </div>
            //         :
            //         <></>
            //     }
            // </div>
        // </>
    // );
}

