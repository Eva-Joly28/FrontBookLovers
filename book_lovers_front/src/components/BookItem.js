import React from 'react'
import { Card, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookItem = (props) => {
  return ([
    <Col>
      <Card style={{ width: '20rem', margin: '4rem auto',
    animation: 'meals-appear 1s ease-out forwards'}}>
        <Link 
        to={{
          pathname : `book/${props.isbn}`,
          search : `?title=${props.title}&author=${props.author}&cover=${props.cover}&summary=${props.summary}`,
        }}>
          <Card.Img variant="top" src={props.cover} />
        </Link>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>   
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <p>Auteur : {props.author}</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  ])
}

export default BookItem