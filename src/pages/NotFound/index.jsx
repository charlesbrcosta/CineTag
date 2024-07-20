import { Title } from '@/components/Title';

import styles from './NotFound.module.css';

export function NotFound() {
    return(
        <section>
            <Title as='h2'>Ops!</Title>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    );
}