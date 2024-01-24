import axios from 'axios';
import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import BookItem from './BookItem';

const SearchingBook = () => {

  const[params] = useSearchParams()
  const[error,seterror] = useState(false);
  const[books,setbooks] = useState([])

  useEffect(() =>{ 
    const query = params.get("title")
    if(query !== ''){
      axios.get(`https://backendtest-5h60.onrender.com/book?title=${query}`)
      .then(function (response) {
    
        setbooks(response.data);
        
        console.log(response.data);
      })
      .catch(function (error) {
        //console.log(error);
        seterror(true);
       
      });
    }
    else{
      seterror(true)
    }
    
  } ,[params]);

  if(error){
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again. 
      </p>
    </Alert>;
  }

  const booksNew = books.map((i) =>{
    console.log(i);
    var myIsbn = ""
    if(i.isbn != null){
      const list = i.isbn.split(',')
      myIsbn = list[0]
    }
    else{
      myIsbn = i.isbn
    }
    
    //const index = i.author.lastIndexOf(',')
    //const myAuthor = i.author.replaceAt(index,' ')
    
    return <BookItem title={i.title} isbn={myIsbn} cover={i.cover} author={i.author} summary = {i.summary}/>})

  
  return (
    <div>{booksNew}</div>
  )
}

export default SearchingBook