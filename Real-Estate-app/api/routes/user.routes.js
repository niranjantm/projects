import express from "express"
import jwt from "jsonwebtoken";
import verifyUser from "../utils/verifyUser.js";
import errorHandler from "../utils/error.js";
import bcrypt from "bcryptjs"
import User from "../models/user.model.js";

const router = express.Router();

router.get("/test",((req,res)=>{
    res.send({
        Message:'get is working'
    })
}));
router.post("/update/:id",verifyUser, async (req,res,next)=>{
    //Update User;
    
    if(req.user.id!=req.params.id){
        return next(errorHandler(401,"You are only allowed to update your own account"));
    }
    try{
       if(req.body.password!=="" && req.body.password!==null && req.body.password!==undefined){
        req.body.password = bcrypt.hashSync(req.body.password,10);
       }

       const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set:{
            username:req.body.username,
            email:req.body.eamil,
            password:req.body.password,
            photo:req.body.photo
        }
       },{new:true});
      const {password,...rest} = updatedUser._doc;
      res.status(200).json(rest)
    }catch(error){
        next(error)
    }
})
router.delete("/delete/:id",verifyUser,async (req,res,next)=>{
    if(req.user.id!=req.params.id){
        return next(errorHandler(401,"Unathorized user"))
    };
    try{
        
        await User.findByIdAndDelete(req.params.id,)
        res.status(200).clearCookie("access_token").json("user deleted successfully");
    }catch(error){
        next(error)
    }
})

export default router;