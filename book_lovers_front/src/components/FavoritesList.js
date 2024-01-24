import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Effectuez une requête HTTP pour récupérer la liste des livres depuis votre backend
        axios.get('http://localhost:8080/api/favorites')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Erreur lors de la récupération des livres:', error));
    }, []);

    return (
        <div>
            <h2>Liste des Livres favoris</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Description</th>
                    {/* Ajoutez d'autres colonnes en fonction de vos données */}
                </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.description}</td>
                        {/* Ajoutez d'autres colonnes en fonction de vos données */}
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};