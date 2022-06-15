import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PostItem from './components/PostItem';
import { useNavigate } from 'react-router-dom';

function App() {


  //=============================================================================
// Initiating variables
//=============================================================================
  
  const navigate = useNavigate();

  const [userId, setUserId] = useState({
      activeUser: sessionStorage.getItem('activeUser'),
  });

  const [posts, setPosts] = useState();
  const [postMessage, setPostMessage] = useState({
    message: '', 
    user: sessionStorage.getItem('activeUser'),
  });

  const [renderPost, setRenderPost] = useState();


//=============================================================================
// Read & Render Posts
//=============================================================================

  useEffect(()=>{

    console.log(userId);
    axios.post('http://localhost:80/assessment-api/readPosts.php', sessionStorage.getItem('activeUser'))
    .then((res)=>{
      let data = res.data;
      let renderPost = data.map((item)=><PostItem key={item.id} rerender={setRenderPost} uniqueId={item.id} user={sessionStorage.getItem('activeUser')} date={item.timestamp} message={item.message}/>);
      console.log(data);
      setPosts(renderPost);
      setRenderPost(false);
      
    })
    .catch(err=>{
      console.log(err);
    });

 },[renderPost]);

//=============================================================================
// Getting new post values & adding post
//=============================================================================

 const postVal = (e) => {
  let messageVal = e.target.value;
  setPostMessage({...postMessage, message: messageVal});
 }

 const addPost = (e) => {
   e.preventDefault();
   document.getElementById('messageText').value = "";
   axios.post('http://localhost:80/assessment-api/addPost.php', postMessage)
    .then((res)=>{
      let data = res.data;
      console.log(data); 
      setRenderPost(true);
    });
 }

 
//=============================================================================
// HTML code
//=============================================================================


  return (
    <div className="App">
      <div className="left">
        <h1>Your Post Timeline</h1>
        <p>Populate the area below with posts from the form to the right...</p>

        <div className="post-items">
         {posts}
        </div>
        
      </div>
      <div className="right">
        <form>
          <h3>Add A New Post</h3>
          <textarea placeholder="your post here" id="messageText"  onChange={postVal}/>
          <button type="submit" onClick={addPost}>Add Your New Post</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
