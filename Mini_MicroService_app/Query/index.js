const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts = {};
app.get("/posts",(req,res)=>{
    res.send(posts)
})
app.post("/events",(req,res)=>{
    const {type,data} = req.body

    if(type==="PostCreated"){
        const {id,title} = data;
        posts[id]={id,title,comments:[]};
    }
    if(type==="CommentCreated"){
        const {commentId,content,postId} = data;
        let post = posts[postId];
        post.comments.push({commentId,content});
    }
    res.send({status:"OK"});
})

app.listen(4002,()=>{
    console.log("Query is live")
    
})