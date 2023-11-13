import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import trips from "./models/trips.js";
import router from "./routes/routes.js";
import busOwners from "./models/busOwners.js";
import cors from "cors";

dotenv.config();

mongoose.connect(process.env.mongo).then( async ()=>{
    console.log("connected to mongodb");
})


const app = express();

app.use(express.json());
app.use(cors())

app.use("/api",router);


app.use((error,req,res,next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal server error";
    res.status(statusCode).json({
        success : false,
        message,
        statusCode
    })
})





app.listen(5000,()=>{
    console.log("Live at 5000");
})