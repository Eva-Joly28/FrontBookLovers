import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const HomePage = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F628925698%2Fvector%2Fpile-of-hardcover-books.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DUskxzCZAQ4LXrgMhgW3M8Q5jdtWFPZ8WxwosF6h6euI%3D&tbnid=Bpjs0e7fGA4dmM&vet=12ahUKEwiuhbS-4pGDAxWPif0HHQLAAGYQMygBegQIARBz..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fpile-of-hardcover-books-gm628925698-111773981&docid=GJ9FVUV3F50OIM&w=612&h=612&q=book&ved=2ahUKEwiuhbS-4pGDAxWPif0HHQLAAGYQMygBegQIARBz" fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F628925698%2Fvector%2Fpile-of-hardcover-books.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DUskxzCZAQ4LXrgMhgW3M8Q5jdtWFPZ8WxwosF6h6euI%3D&tbnid=Bpjs0e7fGA4dmM&vet=12ahUKEwiuhbS-4pGDAxWPif0HHQLAAGYQMygBegQIARBz..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fpile-of-hardcover-books-gm628925698-111773981&docid=GJ9FVUV3F50OIM&w=612&h=612&q=book&ved=2ahUKEwiuhbS-4pGDAxWPif0HHQLAAGYQMygBegQIARBz" fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F628925698%2Fvector%2Fpile-of-hardcover-books.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DUskxzCZAQ4LXrgMhgW3M8Q5jdtWFPZ8WxwosF6h6euI%3D&tbnid=Bpjs0e7fGA4dmM&vet=12ahUKEwiuhbS-4pGDAxWPif0HHQLAAGYQMygBegQIARBz..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fpile-of-hardcover-books-gm628925698-111773981&docid=GJ9FVUV3F50OIM&w=612&h=612&q=book&ved=2ahUKEwiuhbS-4pGDAxWPif0HHQLAAGYQMygBegQIARBz" fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  
}

export default HomePage