import axios from 'axios';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';


const BookCreation = () => {
    const [book, setBook] = useState({
        isbn: '',
        title: '',
        author: '',
        summary: '',
        cover: '',
        rate: 0,
      });
    
      const createBook = async () => {
        try {
          await axios.post('https://backendtest-5h60.onrender.com/book', book);
          console.log('Book created successfully');
          // Add any additional logic or feedback here
        } catch (error) {
          console.error('Error creating book:', error.message);
          // Handle error and provide feedback to the user
        }
      };
    
      const handleInputChanges = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
      };
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Form>
            <Form.Group>
            <Form.Label column lg={2}>titre du livre</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="ex: icebreaker"
                name="title"
                value={book.title}
                onChange={handleInputChanges}
             />
            </Form.Group>
            <Form.Group>
            <Form.Label column lg={2}>
            Isbn du livre
            </Form.Label>
            
            <Form.Control 
                type="text" 
                placeholder="ex: 9780063347793 " 
                name="isbn"
                value={book.isbn}
                onChange={handleInputChanges}
            />
            </Form.Group>

            <Form.Group>
            <Form.Label column lg={2}>
            Résumé du livre
            </Form.Label>
            
            <Form.Control 
                type="text" 
                placeholder="ex: blablabla"
                name="summary"
                value={book.summary}
                onChange={handleInputChanges} 
            />
            </Form.Group>

            <Form.Group>
            <Form.Label column lg={2}>
            Auteur
            </Form.Label>
            <Form.Control 
                type="text" 
                placeholder="ex: Talia Hibbert" 
                name="author"
                value={book.author}
                onChange={handleInputChanges} 
            />
            </Form.Group>

            <Form.Group>
            <Form.Label column lg={2}>
            URL de la couverture
            </Form.Label>
            
            <Form.Control 
                type="text" 
                placeholder="ex: https://..." 
                name="cover"
                value={book.cover}
                onChange={handleInputChanges}
             />
            </Form.Group>

            <Button variant="primary" onClick={createBook}>
              Create your Book
            </Button>

        </Form>
        </Col>
      </Row>
    </Container>
    
  )
}

export default BookCreation