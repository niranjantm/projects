const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(bodyParser.json())
app.use(cors());

app.get("/posts",(req,res)=>{
    res.send(req.body);
})

app.post("/events",(req,res)=>{
const {type,data} = req.body;


if(type=="CommentCreated"){
    const status = data.content.includes('orange')? "Rejected":"Approved"
    
    axios.post("http://localhost:4005/events",{
        type:"CommentModerated",
        data:{
            postId:data.postId,
            commentId:data.commentId,
            content:data.content,
            status
        }
    })
}

    console.log(data.status)
    res.send({});
})

app.listen(4003,()=>{
    console.log("Moderator is live",)
})
