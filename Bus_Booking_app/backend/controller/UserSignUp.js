import User from "../models/User.js";
import bcryptjs from "bcryptjs";


const UserSignUp = async(req,res,next)=>{

    const {name,email,password}=  req.body;

    try{
        const hashedPassword = bcryptjs.hashSync(password,10)
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(200).json("User Created")
    }catch(error){
        next(error)
    }
}

export default UserSignUp