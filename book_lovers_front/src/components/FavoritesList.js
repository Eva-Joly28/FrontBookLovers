// FavoritesList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoritesList = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Effectue une requête pour obtenir la liste des livres favoris depuis l'API
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/favorites');
                setFavorites(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des favoris :', error);
            }
        };

        fetchFavorites();
    }, []); // Exécute le fetch une seule fois lors du montage du composant

    return (
        <div>
            <h2>Liste des Livres Favoris</h2>
            <ul>
                {favorites.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> - {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritesList;
