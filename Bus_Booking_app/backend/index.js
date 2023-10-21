import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import destination from "./models/destination.js";
import router from "./routes/routes.js";

dotenv.config();
mongoose.connect(process.env.mongo).then( async ()=>{
    console.log("connected to mongodb");
    const data  = await destination.find({state:"Assam"});
    console.log(data);
})


const app = express();
app.use("/",router);





app.listen(5000,()=>{
    console.log("Live at 5000");
})