const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(4000,()=>{
    console.log("api server is live at 4000")
})