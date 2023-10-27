import express from "express";
import verifyUser from "../utils/verifyUser.js";
import errorHandler from "../utils/error.js";
import Listing from "../models/listing.model.js";

const router = express.Router();

router.post("/create",async (req,res,next)=>{
    try{
        // if(req.user.id!==req.params.id){
            // return next(errorHandler(401,"Unauthorised user"));
        // }else{
            const listing = await Listing.create(req.body)
            res.status(201).json(listing);
        }
    catch(e){
        next(e)
    }
   
}
)

export default router;