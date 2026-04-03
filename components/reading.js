import Link from 'next/link';
import dayjs from 'dayjs';

import styles from '../styles/blog.module.scss';

export default function Reading({ reading }) {
    function createNameList(names) {
        let name = "";

        if (names.length == 1) {
            return `${names[0].firstName} ${names[0].lastName}`
        }

        for (let i = 0; i < names.length; i++) {
            if (i == names.length - 1) {
                name += `and ${names[i].firstName} ${names[i].lastName}`

                return name;
            }
            name += `${names[i].firstName} ${names[i].lastName}, `
        }

        return name;
    }

    function createTagsList(tags) {
        let tag = "";

        for (let i = 0; i < tags.length; i++) {
            tag += `#${tags[i].tag} `
        }

        return tag;
    }

    return (
        <>
            <div className={styles.post}>
                <hr />
                <Link href={reading.link} passHref>
                    <h2>{reading.title}</h2>
                </Link>

                <p className={styles.info}>By {createNameList(reading.author)}</p>
                <h4 className={styles.info}>Published: {reading.date}</h4>
                <p>Tags: {createTagsList(reading.tags)} </p>
                <p>Date Added: {dayjs(reading.dateAdded).format('MMMM D, YYYY')}</p>
            </div>
        </>
    )

}
