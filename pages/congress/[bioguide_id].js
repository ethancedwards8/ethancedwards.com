import { useRouter } from 'next/router';
import Head from 'next/head';

export default function LearnMore({ bioguide_id }) {

    return (
        <>
            <Head>
                <title>{bioguide_id}</title>
            </Head>

            <p>{bioguide_id}</p>

        </>
    );
}

export async function getServerSideProps({ params: { bioguide_id } }) {
    return {
        props: {
            bioguide_id
        }
    }
}
