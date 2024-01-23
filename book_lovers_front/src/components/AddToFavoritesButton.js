import axios from 'axios';
import Button from 'react-bootstrap/Button';

const API_BASE_URL = 'http://localhost:8080/api';

const AddToFavoritesButtonService = {
    addToFavorites: async (bookInfo) => {
        try {
            const url = `${API_BASE_URL}/favorites/add`;
            const response = await axios.post(url, { bookInfo });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la requête addToFavorites :', error);
            
        }
    },

};

export default AddToFavoritesButtonService;
