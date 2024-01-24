import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import BookDetails from './BookDetails'; 

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Effectuez une requête HTTP pour récupérer la liste des livres depuis votre backend
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/favorites');
                setBooks(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des livres:', error);
            }
        };
        fetchData(); // Appelez la fonction asynchrone ici
    }, []);

    return (
        <div>
            <h2>Liste des Livres</h2>
            {books.map(book => (
                <BookDetails key={book.id} bookInfo={book} />
            ))}
        </div>
    );
};

export default BookList;
