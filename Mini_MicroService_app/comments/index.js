const express = require("express");
const bodyParser = require("body-parser");
const {randomBytes} = require("crypto");
const cors  = require("cors");

const app  = express();
app.use(bodyParser.json());
app.use(cors());
const commentByPostId = {};
app.get("/posts/:id/comments",(req,res)=>{
    res.send(commentByPostId[req.params.id]);
})

app.post("/posts/:id/comments",(req,res)=>{
    const comment_id = randomBytes(4).toString("hex");
    const {content} = req.body;

    const comments = commentByPostId[req.params.id] || [];
    comments.push({id:comment_id,content});
    commentByPostId[req.params.id] = comments
    res.status(201).send(commentByPostId[req.params.id]);
})

app.listen(4001,()=>{
    console.log("Comments server is Live");
})