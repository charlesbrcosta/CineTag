import { Banner } from '@/components/Banner';
import { Title } from '@/components/Title';
import { Cards } from '@/components/Cards';
import { useFavoriteContext } from '../../contextAPI/Favorite';

import styles from './Favorite.module.css';

export function Favorites() {
    const { favorite } = useFavoriteContext();
    return(
        <>
            <Banner image='favoritos'/>
            <Title as='h1'>
                Meus Favoritos
            </Title>
            <section className={styles.container}>
                { favorite.map((fav) => {
                    return <Cards key={fav.id} {...fav} />
                }) }
            </section>
        </>
    );
}