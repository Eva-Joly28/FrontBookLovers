import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import axios from 'axios'

const CommentForm = (props) => {
    const[error,seterror] = useState(false)
    const[comment,setcomment] = useState("")
    const isbn = props.isbn
    const AddComment = async () => {
        try {
          await axios.post(`https://backendtest-5h60.onrender.com/comment/${isbn}`, comment);
          console.log('Comment added successfully');
        } catch (error) {
          console.error('Error creating book:', error.message);
          seterror(true)
        }
      };
    const clickFunction =()=>{
        AddComment()
        window.location.reload();
    }

  return (
    <>
      <FloatingLabel controlId="floatingTextarea2">
        <Form.Control
          acceptCharset="UTF-8"
          as="textarea"
          placeholder="Leave a comment here"
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
          style={{ height: '100px', margin:'20px' }}
        />
      </FloatingLabel>
      <Button type="submit" onClick={clickFunction}>ajouter ce commentaire</Button>
    </>
  )
}

export default CommentForm