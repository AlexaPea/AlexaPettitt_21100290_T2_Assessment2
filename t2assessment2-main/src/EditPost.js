import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const EditPost = (props) => {

  //=============================================================================
// Getting & display original post
//=============================================================================

   const [updatedPost, setUpdatedPost] = useState({
    //add old text
    newMessage: props.original,
    id: props.id
  });

  useEffect(() => {

    let message = props.original;
    document.getElementById('updateText').innerHTML = message;

  },[]);

  //=============================================================================
// Close edit pop up
//=============================================================================

  const closeModal = () =>{
    props.renderer();
  }

  //=============================================================================
// Get & display new post
//=============================================================================

  const handleChange = (e) => {
    let value = e.target.value;
    setUpdatedPost({...updatedPost, newMessage:value})
  }

  const updatePost = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/assessment-api/readPosts.php', props.user)
    .then(function(response){
      console.log(response);
      props.upRender(true);
      props.renderer();
    });
  }

  //=============================================================================
// HTML code
//=============================================================================

  return (
    <div className='modal'>
      <form>
        <h1>Made a Mistake? Edit that shit!</h1>
        <p onClick={closeModal}>Close Modal</p>
        <textarea onChange={handleChange} id='updateText' placeholder='Edit Post Message' />
        <button type='submit' onClick={updatePost} >Edit this post</button>
      </form>
       
      
    </div>
  )
}

export default EditPost

