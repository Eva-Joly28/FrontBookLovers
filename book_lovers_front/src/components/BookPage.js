import React, { useEffect, useState } from 'react'
import { Figure } from 'react-bootstrap'
import { useParams, useSearchParams } from 'react-router-dom'
import './BookPageStyle.css'
import CommentForm from './CommentForm'
import axios from 'axios'

const BookPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams()
  const Isbn = params.isbn
  const title = searchParams.get("title")
  const author = searchParams.get("author")
  const cover = searchParams.get("cover")
  const summary = searchParams.get("summary")
  const [defaultComments,setdefaultComments]=useState(true);
  const [comments,setcomments] = useState([])


  useEffect(() =>{ 
  
      axios.get(`https://backendtest-5h60.onrender.com/book/${Isbn}/comments`)
      .then(function (response) {

        setcomments(response.data)
        //console.log(comments.length)
        if (comments.length > 0){
          //console.log(comments.length)
          setdefaultComments(false)
        }
        //console.log(response.data);
      })
      .catch(function (error) {
        //console.log(error);
       
      });
    
    
  } ,[comments]);
  
  
  const allComments = comments.map((i) =>{
    return <p className='comments'>{i}</p>
  })

  return (
    <>
    <section id = "one">
        <Figure id="cover">
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
    <section id='commentaires'>
      <h1>Commentaires</h1>
      {defaultComments && <h2>Aucun commentaire pour ce livre</h2>}
      {allComments}
    </section>
    <section id = "addComments">
      <CommentForm isbn = {Isbn}/>
    </section>

    
    </>
  )
}

export default BookPage