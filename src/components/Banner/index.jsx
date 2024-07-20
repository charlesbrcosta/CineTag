import styles from './Banner.module.css';

export function Banner({ image }) {
    return(
        <div 
            className={ styles.banner }
            style={{ backgroundImage: `url('/assets/banner-${image}.png')` }}    
        ></div>
    );
}