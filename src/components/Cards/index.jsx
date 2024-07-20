import { Link } from 'react-router-dom';

import { useFavoriteContext } from '../../contextAPI/Favorite';

import iconFavorite from './favorite.png';
import iconUnfavorite from './unfavorite.png';

import styles from './Cards.module.css';

export function Cards({id, title, cape }) {
    const { favorite, addFavorite } = useFavoriteContext();

    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = isFavorite ? iconFavorite : iconUnfavorite;
    return(
        <div className={ styles.container }>
            <Link to={`videos/${id}`} className={styles.link}>
                <img src={ cape } alt={ title } className={ styles.cape }/>
                <h2>{ title }</h2>
            </Link>
            <img src={ icon } alt='Favoritar Filmes' className={styles.favorite} onClick={() => addFavorite({ id, title, cape })}/>
        </div>
    );
}