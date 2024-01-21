import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Remplacez par l'URL de votre API Spring Boot

const AddToFavoritesButtonService = {
    addToFavorites: (bookId) => axios.post(`${API_BASE_URL}/addToFavorites/${bookId}`),
    // Ajoutez d'autres méthodes selon vos besoins
};

export default AddToFavoritesButtonService;
