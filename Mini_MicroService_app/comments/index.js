const express = require("express");
const bodyParser = require("body-parser");
const {randomBytes} = require("crypto");
const cors  = require("cors");
const axios  = require("axios");

const app  = express();
app.use(bodyParser.json());
app.use(cors());

const commentByPostId = {};
app.get("/posts/:id/comments",(req,res)=>{
    res.send(commentByPostId[req.params.id]);
})

app.post("/posts/:id/comments",async (req,res)=>{
    const commentId = randomBytes(4).toString("hex");
    const {content} = req.body;

    const comments = commentByPostId[req.params.id] || [];
    comments.push({id:commentId,content});
    commentByPostId[req.params.id] = comments

    await axios.post("http://localhost:4005/events",{
        type:"CommentCreated",
        data:{commentId,content,postId:req.params.id}
    });

    res.status(201).send(commentByPostId[req.params.id]);
})
app.post("/events",(req,res)=>{
    console.log("Event_Comment--->",req.body);

    res.send({});
})

app.listen(4001,()=>{
    console.log("Comments server is Live");
})