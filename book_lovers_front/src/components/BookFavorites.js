import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const BookFavorites = (props) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={props.cover} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.author}</Card.Subtitle>
                    <Card.Text>
                        <strong>Rank:</strong> {props.rank}
                        <br />
                        <strong>Summary:</strong> {props.summary}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default BookItem;
