import React from 'react'
import "../styles/PostCreation.css";

function PostsCreation() {
  return (
    <form>
        <div class='main-div'>
            <p>Create Post</p>
            <label>Enter post name</label>
            <input></input>
            <button type='submit' class='btn btn-Pcreate'>Create</button>
        </div>
    </form>
  )
}

export default PostsCreation