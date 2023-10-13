import express from "express";
import User from "../models/user.model.js";
//import bodyParser from "body-parser";
import bcryptjs from "bcryptjs"

const router  = express.Router();

router.use(express.json());
router.post("/sign-up", async (req,res,next)=>{
    const {user,email,password} = req.body
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User ({username:user,email,password:hashedPassword})
    try{
        await newUser.save()
    res.status(201).json("User Created")
    }catch(error){
        next(error)
    }
    
})

export default router;