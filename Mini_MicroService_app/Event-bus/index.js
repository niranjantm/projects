const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());
const events = [];
app.post("/events",(req,res)=>{
    const event = req.body;
    events.push(event);
    axios.post("http://localhost:4000/events",event).catch((err)=>{
        console.log(err);
    })
    axios.post("http://localhost:4001/events",event).catch((err)=>{
        console.log(err);
    });
    axios.post("http://localhost:4002/events",event).catch((err)=>{
        console.log(err);
    });
    axios.post("http://localhost:4003/events",event).catch((err)=>{
        console.log(err);
    })

    res.send({});
});

app.get("/events",(req,res)=>{
    console.log(events);
    res.send(events);
})

app.listen(4005,()=>{
    console.log("Event server is live")
});
