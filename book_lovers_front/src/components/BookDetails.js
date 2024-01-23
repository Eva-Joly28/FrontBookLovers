// BookDetails.js

import React, { useState, useEffect } from 'react';
import AddToFavoritesButtonService from './AddToFavoritesButton';
import Card from 'react-bootstrap/Card';
import axios from 'axios'; // Inclure Axios directement dans le composant

const API_BASE_URL = 'http://localhost:8080/api';

const BookDetails = ({ bookInfo }) => {

    const handleAddToFavorites = async () => {
        try {
            await AddToFavoritesButtonService.addToFavorites(bookInfo);
            setIsBookAddedToFavorites(true);
        } catch (error) {
            console.error('Erreur lors de l\'ajout du livre aux favoris :', error);
            // Gérez l'erreur ici (affichage d'un message à l'utilisateur, journalisation, etc.)
        }
    };

    useEffect(() => {
        // Récupérez les détails du livre lors du montage du composant
        const fetchBookDetails = async () => {
            try {
                const url = `${API_BASE_URL}/books/${bookIsbn}`;
                const response = await axios.get(url);
                setBookDetails(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du livre :', error);
                // Gérez l'erreur ici (affichage d'un message à l'utilisateur, journalisation, etc.)
            }
        };

        fetchBookDetails();
    }, [bookIsbn]);

    return (
        <div>
            {bookDetails && (
                <div>
                    <h2>Détails du livre</h2>
                    <Card>
                        <Card.Img variant="top" src={bookDetails.cover} alt={`Cover of ${bookDetails.title}`} />
                        <Card.Body>
                            <Card.Title>{bookDetails.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{bookDetails.author}</Card.Subtitle>
                            <Card.Text>{bookDetails.summary}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Rate: {bookDetails.rate}</small>
                        </Card.Footer>
                    </Card>

                    {/* Bouton pour ajouter aux favoris */}
                    <button onClick={handleAddToFavorites} disabled={isBookAddedToFavorites}>
                        {isBookAddedToFavorites ? 'Ajouté aux favoris !' : 'Ajouter aux favoris'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookDetails;
