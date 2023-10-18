import express from "express";
import User from "../models/user.model.js";
//import bodyParser from "body-parser";
import bcryptjs from "bcryptjs"
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";

const router  = express.Router();

router.use(express.json());
router.post("/sign-up", async (req,res,next)=>{
    const {user,email,password} = req.body
    console.log(req.body);
    try{
        const hashedPassword = bcryptjs.hashSync(password,10);
        const newUser = new User ({username:user,email,password:hashedPassword})
    
        await newUser.save()
    res.status(201).json("User Created")
    }catch(error){
        next(error)
    }
    }
)

router.post("/sign-in", async (req,res,next)=>{
    const {email,password} = req.body
    console.log(req.body);
    try{
        const validUser = await User.findOne({email:email})
        if(!validUser){
            return(
                next(errorHandler(404,"Invalid User"))
            )
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return(
                next(errorHandler(401,"Wrong credentials"))
            )
        }
        const {password:pass,...rest} = validUser._doc;
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        res.cookie("access_token",token,{httpOnly:true}).status(200).json(rest);
    }catch(error){
        next(error)
    }
    
})

export default router;