import React from 'react'
import {useState} from "react"
import axios from "axios";

function PostsCreation() {
const [title,setTitle] = useState("");
const changeHandler = (event)=>{
  console.log(title);
  setTitle(event.target.value);
  
}
const submitHandler = async (event)=>{
  event.preventDefault();

  await axios.post("http://localhost:4000/posts",{
    title:title
  })
  setTitle("");
}
  return (
    <form onSubmit={submitHandler}>
        <div className='bg-blue-200 max-w-fit flex flex-col rounded-lg p-2'>
            <p className='text-lg mb-2'>Create Post</p>
            <div className="mb-2">
            <label>Enter post name</label>
            <input onChange={changeHandler} value={title} className='border border-gray-500 rounded-md ml-1'></input>
            </div>
            <div className=' min-w-full flex justify-center'>
            <button type='submit' className="border border-gray-500 bg-red-500 max-w-fit pr-3 pl-3 pt-1 pb-1 rounded-lg">Create</button>
            </div>
        </div>
        
    </form>
  )
}

export default PostsCreation