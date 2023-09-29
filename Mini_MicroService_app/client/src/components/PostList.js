import React,{useState,useEffect, Fragment} from "react";
import axios from "axios"
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";


export default function PostList(){
    const [posts,setPosts] = useState({});
    const fetchPosts = async ()=>{
        const res = await axios.get("http://localhost:4002/posts");
        setPosts(res.data);
    }
    

    useEffect(()=>{
        fetchPosts();
    },[]);
    console.log("post--->",posts)
    const MyPosts = Object.values(posts).map((post)=>{
        return(
            <div key={post.id} className="min-w-fit min-h-[150px] bg-orange-300 rounded-xl mt-2  mb-2 p-2">
                <p>{post.title}</p>
                
                <CommentList commentId={post.id}></CommentList>
                <CommentCreate id={post.id}></CommentCreate>
            </div>
        )
    })
    
    return(
        <Fragment>
            <p className="text-xl font-semibold">Posts</p>
        <div className="grid grid-cols-4 space-x-2">
    
           {MyPosts}
           
        </div>
        
        </Fragment>
    )
    
}