import { useState, useEffect } from 'react';

import { Banner } from "@/components/Banner";
import { Title } from "@/components/Title";
import { Cards } from "@/components/Cards";

import styles from './Home.module.css';

export function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/charlesbrcosta/cinetag-api/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            });
    }, []);

    return(
        <>           
            <Banner image='home'/>
            <Title as='h1'>
                Um lugar para guardar seus vídeos e filmes!
            </Title>
            <section className={styles.container}>
                { videos.map((video) => {
                    return <Cards key={ video.id } { ...video } />
                }) }
            </section>           
        </>
    );
}