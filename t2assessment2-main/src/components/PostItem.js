import React, {useState} from 'react'
import axios from 'axios';
import EditPost from '../EditPost'


const PostItem = (props) => {

  const [modal, setModal] = useState();

  //=============================================================================
// Edit Posts
//=============================================================================

  const editPost = () => {
    setModal(<EditPost upRender={props.renderer} renderer={setModal} original={props.message} id={props.uniqueId} user={sessionStorage.getItem('activeUser')}/>)
  }

 //=============================================================================
// Deleting Posts
//=============================================================================

  const deletePost = () => {
      //pop up to confirm if message should be deleted
    if(window.confirm("Are you sure you want to delete this post? You won't be able to retrieve it!") === true){

        //setting postId
      let postId = {id:props.uniqueId};

      axios.post('http://localhost:80/assessment-api/deletePost.php', postId)
      .then(function(response){
        console.log(response);
        props.renderer(true);
      })

    }else{
      console.log("The user did not delete the post.")
    }
  }

  //=============================================================================
// html code
//=============================================================================

  return (
    <div className='post_item'>
    {modal}
      <div id={props.uniqueId} >
        <div className='postHeader'>
          <h3 className='userPost'>{props.user}</h3>
          <h6 className='date'>{props.date}</h6>
        </div>
          <p className="mess">{props.message}</p>
          <div className='postUi'>
            <p className='edit' onClick={editPost}>Edit Post</p>
            <p className='delete' onClick={deletePost}>Delete Post</p>
          </div>
          
      </div>
      
    </div>
  )
}

export default PostItem
