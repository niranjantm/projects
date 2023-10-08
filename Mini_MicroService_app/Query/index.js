const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios =require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts = {};

function handleEvent(type,data){
    if(type==="PostCreated"){
        const {id,title} = data;
        posts[id]={id,title,comments:[]};
    }
    if(type==="CommentCreated" ){
        const {commentId,content,postId,status} = data;
        const post = posts[postId];
        post.comments.push({commentId,content,status});
        
    }
    if(type==="CommentUpdated"){
        const {commentId,content,postId,status} = data;
        const post = posts[postId];
        const comment = post.comments.find((comment)=>{
            return comment.commentId === commentId;
        })
        comment.status = status;
        comment.content = content;
    }
}
app.get("/posts",(req,res)=>{
    res.send(posts)
})
app.post("/events",(req,res)=>{
   
    const {type,data} = req.body
   
    handleEvent(type,data);
    
    res.send({status:"OK"});
})

app.listen(4002, async () => {
    // console.log("Listening on 4002");
    // try {
    //   const res = await axios.get("http://localhost:4005/events");
   
    //   for (let event of res.data) {
    //     console.log("Processing event:", event.type);
   
    //     handleEvent(event.type, event.data);
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
    console.log("Query is live on 4002");
    try{
        let res =await axios.get("http://localhost:4005/events");
        console.log(res.data);
        for(let event of res.data){
        console.log("Processing event: ",event.type)
        handleEvent(event.type,event.data)
        }

    } catch(error){
        console.log("error---->",error);
    }
  });