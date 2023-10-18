import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js"
import cors from "cors";
// import bodyParser from "body-parser";

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})

const app = express();

//  app.use(bodyParser.json());
// app.use(express.json());
//  app.use(cors());
 app.use("/api/users",userRouter)
 app.use("/api/auth",authRouter);
 app.use((error,req,res,next)=>{
    const statusCode = error.statusCode ||500;
    const message = error.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        errorMessage:message,
        statusCode,
        
    })
 })

app.listen(4000,()=>{
    console.log("api server is live at 4000")
})