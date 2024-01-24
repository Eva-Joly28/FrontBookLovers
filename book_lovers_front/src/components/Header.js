import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [inputValue, setinputValue] = useState('')
  //const navigate = useNavigate()

  /*const handleSearch = () => {
    navigate(`/books?title=${inputValue}`);
  }*/

  return (
    <Navbar bg="light" expand="lg" class="bg-body-tertiary justify-content-between">
      <Container fluid>
        <Navbar.Brand href="/">GetYoAlbum</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Favoris</Nav.Link>
            <Nav.Link href="/createBook">Ajouter un livre</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form inline >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="entrez un titre de livre"
              className=" mr-sm-2"
              onChange={(e) => setinputValue(e.target.value)}
            />
          </Col>
          <Col xs="auto">
          <Link
            to={{
              pathname: '/books',
              search: `?title=${inputValue}`,
            }}>
            <Button type="submit">Rechercher</Button>
          </Link>
          </Col>
        </Row>
      </Form>
    </Navbar>
  )
}

export default Header