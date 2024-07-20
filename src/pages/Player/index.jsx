import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Banner } from '@/components/Banner';
import { Title } from '@/components/Title';

import styles from './Player.module.css';
import { NotFound } from '@/pages/NotFound';

export function Player() {
    const [video, setVideo] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/charlesbrcosta/cinetag-api/videos?id=${id}`)
            .then(response =>  response.json())
            .then(data => {
                if(Array.isArray(data) && data.length > 0) {
                    setVideo(data[0]);
                } else {
                    setVideo(null);
                }
            }).catch(error => {
                console.error("Erro fetching vídeo: ", error);
                setVideo(null);
            });
    }, [id])

    if(!video) {
       return <NotFound />
    }
    return(
        <>
            <Banner image="player"/>
            <Title as='h1'>Player</Title>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link}
                    title={video.title} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                ></iframe>
            </section>
        </>
    );
}