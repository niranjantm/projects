import axios from 'axios';
import React,{useState}from 'react'

function CommentCreate({postId}) {

    const [comment,setComment] = useState("");


    const submitHandler = async (event)=>{
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{content:comment});
        setComment("");
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='flex flex-col'>
            <input placeholder='Comments' onChange={(e)=>{setComment(e.target.value)}} value = {comment} className='rounded-md border border-gray-700'></input>
            <button type='submit' className='p-1 bg-blue-300 max-w-[60px] mt-1 rounded-md border border-gray-700'>Add</button>
        </div>
    </form>
  )
}

export default CommentCreate