import User from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


const UserSignIn=async(req,res,next)=>{

    const {email,password} = req.body;
try{
    const validUser = await User.findOne({email});
    if(!validUser){
        next(ErrorHandler(404,"Invalid User"))
    }
    else{
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if(!validPassword){
            next(ErrorHandler(401,"Wrong Credentials"))
        }
        else{
            const{password,...rest} = validUser._doc
           const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)

           res.cookie("access_token",token,{httpOnly:true}).status(200).json(rest);
        }
    }   
    
}catch(error){
    next(error)
}

}
export default UserSignIn