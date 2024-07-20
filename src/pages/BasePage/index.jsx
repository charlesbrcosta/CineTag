import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container'
import { FavoriteProvider } from '@/contextAPI/Favorite';
import { Footer } from '@/components/Footer';

export function BasePage() {
    return(
        <main>
            <Header />
            <FavoriteProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoriteProvider>
            <Footer />
        </main>
    );
}
