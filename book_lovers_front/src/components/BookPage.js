import React from 'react'
import { Figure } from 'react-bootstrap'
import { useParams, useSearchParams } from 'react-router-dom'
import './BookPageStyle.css'

const BookPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams()
  const Isbn = params.isbn
  const title = searchParams.get("title")
  const author = searchParams.get("author")
  const cover = searchParams.get("cover")
  const summary = searchParams.get("summary")


  return (
    <>
    <section id = "one">
        <Figure id="f">
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={cover}
            />
        </Figure>
        <div>
            <h2>{title}</h2>
            <p>Auteur : {author}</p>
            <p>{summary}</p>
            <p>Isbn : {Isbn}</p>
        </div>
    </section>
    <h1>Commentaires</h1>
    <section id = "two">

    </section>

    
    </>
  )
}

export default BookPage