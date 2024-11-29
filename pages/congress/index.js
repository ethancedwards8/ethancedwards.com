import Link from 'next/link';
import dayjs from 'dayjs';
import { useState } from 'react';

import styles from '../../styles/blog.module.scss';

import Representatives from '../../components/representatives.js';

export default function Congress({ rep }) {

    // const [address, setAddress] = useState("");

    // const search = (formData) => {
    //     formData.prevent
    //     const query = formData.get("query");
    //     alert(`You searched for '${query}'`);
    // }

    const [address, setAddress] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault()
        let res = await fetch(`https://api.ethancedwards.com/congress/v1/${address}`)
        let info = await res.json();

        console.log(info);

        document.getElementById('test').innerHTML = info.name;

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your address:
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </label>
            </form>

            <Representatives rep={rep} />

        </>
    );
}

export async function getServerSideProps() {
    // local development
    // const res = { quote: "Quote", author: "Author" };
    // const quotes = res;

    // production
    const res = await fetch(`https://api.ethancedwards.com/congress/v1/1600+Pennsylvania+Avenue+NW+Washington+DC+20500`);
    const rep = await res.json();

    return { props: { rep } };

}
