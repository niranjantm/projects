import React,{useState,useEffect} from 'react'
import axios from "axios";

function CommentList({commentId}) {
    const [comments,setComments] = useState([])

    const fetchComment = async ()=>{
        const res = await axios.get(`http://localhost:4001/posts/${commentId}/comments`);
        setComments(res.data);
    }
    useEffect(()=>{
        fetchComment();
    },[])
    
  return (
    <div className='max-h-[100px] overflow-scroll'>
        {!comments?"":comments.map((c)=>{
            return(
                <div className='pl-2 mt-1'>
                    <li>{c.content}</li>
                </div>
            )
        })}
    </div>
    
  )
}

export default CommentList