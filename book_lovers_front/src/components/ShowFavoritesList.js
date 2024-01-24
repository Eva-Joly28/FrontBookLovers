import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowFavoritesList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('votre_url_api');
                setData(response.data); // Mettez à jour l'état avec les données de l'API
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData(); // Appel de la fonction fetchData lors du montage du composant
    }, []); // Le tableau vide [] signifie que ce useEffect est exécuté une seule fois lors du montage du composant

    // ... le reste du code
};
