import { createContext, useState, useContext } from "react";

// Criar o contexto
export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favorite";

// Provider do contexto
export function FavoriteProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoriteContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}

// Hook customizado para usar o contexto
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoriteContext);

    function addFavorite(newFavorite) {
        // Verificar se o item já está na lista de favoritos
        const repeatFavorite = favorite.some(item => item.id === newFavorite.id);
        const newList = [...favorite];

        if (!repeatFavorite) {
            newList.push(newFavorite);
            setFavorite(newList);
            return;
        }

        // Remover item da lista de favoritos
        const unfavorite = newList.filter(item => item.id !== newFavorite.id);
        setFavorite(unfavorite);
    }

    return {
        favorite,
        addFavorite,
    };
}
