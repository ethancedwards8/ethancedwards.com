import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

import { NextSeo } from 'next-seo';

import styles from '../styles/gallery.module.scss';

export default function PhotoGallery({ photos }) {
    return (
        <>
            <NextSeo
              title="Gallery"
              description="Photo Gallery of Memories"
              openGraph={{
                url: 'https://ethancedwards.com/gallery',
              }}
            />

            <div className={styles.header}>
                <h1>Photo Gallery</h1>
                <p>Here are some memories from the past few years. Feel free to click through them!</p>
            </div>

            <div className={styles.wrapper}>
            <Gallery withCaption>
                <div className={styles.gallery_grid}>
                {photos.map((photo, index) => (
                    <Item
                        key={index}
                        original={photo.original}
                        alt={photo.caption}
                        width={photo.width}
                        height={photo.height}
                    >
                    {({ ref, open }) => (
                        <Image alt={photo.alt} width={photo.width} height={photo.height} style={{ cursor: 'pointer' }} ref={ref} onClick={open} src={photo.original} />
                    )}
                    </Item>
                ))}
                </div>
            </Gallery>
        </div>
        </>
    );
}

export async function getStaticProps() {
    const photos = [
        {
            "caption": "Canaday D-41",
            "original": "/gallery/canadayd41.JPG",
            "width": 1600,
            "height": 1200
        },
        {
            "caption": "Canaday D Men",
            "original": "/gallery/canadaydmen.JPG",
            "width": 1536,
            "height": 2048
        },
        {
            "caption": "Canaday D Entryway",
            "original": "/gallery/canadayd.JPG",
            "width": 2048,
            "height": 1536
        },
        {
            "caption": "FOP group at convocation",
            "original": "/gallery/fopconvocation.jpeg",
            "width": 5712,
            "height": 4284
        },
        {
            "caption": "End of FOP",
            "original": "/gallery/fopend.jpeg",
            "width": 4032,
            "height": 3024
        },
        {
            "caption": "FOP Mountain Summit",
            "original": "/gallery/foptopofmountain.jpeg",
            "width": 4032,
            "height": 3024
        },
        {
            "caption": "Day 1 of FOP",
            "original": "/gallery/fopday1.jpeg",
            "width": 3024,
            "height": 4032
        },
        {
            "caption": "Traveling to NH for FOP!",
            "original": "/gallery/startfop.jpeg",
            "width": 4032,
            "height": 3024
        },
        {
            "caption": "Back To School Bash With CCLTF",
            "original": "/gallery/ccltfbacktoschoolbash.jpg",
            "width": 2048,
            "height": 1365
        },
        {
            "caption": "At Harvard",
            "original": "/gallery/EthanHarvard.JPG",
            "width": 1536,
            "height": 2048
        },
        {
            "caption": "At Courthouse by Gunshot",
            "original": "/gallery/EthanSuitSteps.jpg",
            "width": 560,
            "height": 840
        },
        {
            "caption": "At CCHS Graduation",
            "original": "/gallery/ethandiploma.jpg",
            "width": 1536,
            "height": 2048
        },
        {
            "caption": "At WCC Graduation with Family",
            "original": "/gallery/wccgraduation.JPG",
            "width": 1536,
            "height": 2048
        },
        {
            "caption": "At FBLA Nationals",
            "original": "/gallery/ethannationals.jpeg",
            "width": 3936,
            "height": 2624
        },
        {
            "caption": "Ethan at Golden Cavs",
            "original": "/gallery/goldencavs.jpeg",
            "width": 4180,
            "height": 3018
        },
        {
            "caption": "XC Varsity Boys at Knight's Crossing",
            "original": "/gallery/ethanxcteam.jpeg",
            "width": 5472,
            "height": 3648
        },
        {
            "caption": "Ethan Interviewing Education Panelists",
            "original": "/gallery/oneofuscare.jpeg",
            "width": 1024,
            "height": 768
        },
        {
            "caption": "As Panelist at RU Cybersecurity Ed. Summit",
            "original": "/gallery/radfordcybersecuritysummit.JPG",
            "width": 1440,
            "height": 1080
        },
        {
            "caption": "Trash Pickup on US-58",
            "original": "/gallery/trashpickup58.JPG",
            "width": 960,
            "height": 720
        },
        {
            "caption": "The Ridge Podcast Logo",
            "original": "/gallery/TheRidgePodcastECE3000x3000.jpg",
            "width": 3000,
            "height": 3000
        },
        {
            "caption": "Family at Fenway Park",
            "original": "/gallery/fenwaypark.JPG",
            "width": 1180,
            "height": 1475
        },
        {
            "caption": "Ethan photobombing",
            "original": "/gallery/ethanandnickjumping.JPG",
            "width": 2016,
            "height": 2688
        },
        {
            "caption": "Boys State Moot Court Team",
            "original": "/gallery/boysstate.jpeg",
            "width": 4032,
            "height": 3024
        },
        {
            "caption": "Ethan at Rubiks Cube Competition",
            "original": "/gallery/youngcubingethan.jpeg",
            "width": 600,
            "height": 800
        },
        {
            "caption": "Favicon/My Logo",
            "original": "/gallery/favicon.png",
            "width": 512,
            "height": 512
        },
        {
            "caption": "Swimming Freestyle at State",
            "original": "/gallery/ethanswim.JPG",
            "width": 2048,
            "height": 1365
        },
        {
            "caption": "Knight's Crossing XC Meet Photo",
            "original": "/gallery/knightscrossing.jpeg",
            "width": 4032,
            "height": 3024
        },
        {
            "caption": "Team at Sugar Hollow",
            "original": "/gallery/sugarhollowxc.JPG",
            "width": 1440,
            "height": 1080
        },
        {
            "caption": "Running at Grayson Highlands",
            "original": "/gallery/ethansummithighlands.jpg",
            "width": 1100,
            "height": 733
        },
        {
            "caption": "Swim Team at State",
            "original": "/gallery/swimteamatstate.jpeg",
            "width": 1008,
            "height": 756
        },
        {
            "caption": "Ethan and Artemis on a Rock",
            "original": "/gallery/ethan_artemis_rock.JPG",
            "width": 3204,
            "height": 2746
        },
    ];

    return {
        props: {
            photos
        }
    }
}
