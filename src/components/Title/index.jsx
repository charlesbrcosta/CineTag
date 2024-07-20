import styles from './Title.module.css';

export function Title({ as: Component = 'h1', children }) {
    return(
        <Component className={styles.title}>
            { children }
        </Component>
    );
}