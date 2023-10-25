import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import trips from "./models/trips.js";
import router from "./routes/routes.js";
import busOwners from "./models/busOwners.js";

dotenv.config();
mongoose.connect(process.env.mongo).then( async ()=>{
    console.log("connected to mongodb");
})


const app = express();
app.use("/",router);





app.listen(5000,()=>{
    console.log("Live at 5000");
})