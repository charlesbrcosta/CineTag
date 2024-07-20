import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '@/pages/Home';
import { Favorites } from "@/pages/Favorite";
import { Player } from '@/pages/Player';
import { NotFound } from "@/pages/NotFound";
import { BasePage } from "@/pages/BasePage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BasePage />}>
                <Route index element={<Home />}></Route>
                <Route path='favoritos' element={<Favorites />}></Route>
                <Route path='videos/:id' element={<Player />}></Route>
                <Route path='*' element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}