import axios from 'axios';
import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SearchingBook = () => {

  const{query} = useParams()
  const[error,seterror] = useState(false);
  const[books,setbooks] = useState([])

  useEffect(() =>{ 
    if(query !== ''){
      axios.get(`https://backendtest-5h60.onrender.com/book?title=${query}`)
      .then(function (response) {
        // handle success
        //setdata(response.data.products);
        //setspinner(false);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
        seterror(true);
        //setspinner(false);
      });
    }
    else{
      seterror(true)
    }
    
  } ,[]);

  if(error){
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again. 
      </p>
    </Alert>;
  }



  return (
    <div>SearchingBook</div>
  )
}

export default SearchingBook