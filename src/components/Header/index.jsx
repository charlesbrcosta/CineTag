import { Link } from 'react-router-dom';
import { HeaderLink } from '@/components/HeaderLink';
import logo from './logo.png';
import styles from './Header.module.css';

export function Header() {
    return(
        <header className={ styles.header }>
            <Link to='/'>
                <img src={ logo } alt='Logo do CineTag'/>
            </Link>
            <nav>
                <HeaderLink url='/'>
                    Início
                </HeaderLink>
                <HeaderLink url='/favoritos'>
                    Favoritos
                </HeaderLink>                
            </nav>
        </header>
    );
}