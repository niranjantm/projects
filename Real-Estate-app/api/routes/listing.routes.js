import express from "express";
import verifyUser from "../utils/verifyUser.js";
import errorHandler from "../utils/error.js";
import Listing from "../models/listing.model.js";

const router = express.Router();

router.get("/created/:id",verifyUser,async (req,res,next)=>{
    try{
        if(req.user.id!==req.params.id){
            return next(errorHandler(401,"Unauthorised user"));
        }else{
        const data = await Listing.find({userRef:req.params.id})
    console.log(data);
    res.status(200).json(data)
        }  
    }catch(error){
        next(error);
    }
    
})

router.post("/create/:id",verifyUser,async (req,res,next)=>{
    try{
        if(req.user.id!==req.params.id){
            return next(errorHandler(401,"Unauthorised user"));
        }else{
            const listing = await Listing.create(req.body)
            res.status(201).json(listing);
        }
        }
    catch(e){
        next(e)
    }
   
}
)

router.delete("/delete/:docId",verifyUser,async(req,res,next)=>{
    
    const listing = await Listing.findById(req.params.docId);
    if(!listing){
        return next(errorHandler(401,"Listing not present"))
    }
    
    if(req.user.id!==listing.userRef){
        return next(errorHandler(401,"Unauthorised user"))
    }
   
    
   
    try{
        await Listing.findByIdAndDelete(req.params.docId);
        res.status(200).json("Delete : OK");
    }catch(error){
        next(error);
    }
})

router.get("/get/:listingId", async (req,res,next)=>{
    console.log(req.params.listingId);
    try{
        const listing = await Listing.findById(req.params.listingId);
        if(!listing){
            return next(errorHandler(400,"No listing found"))
        }else{
            res.status(200).json(listing);
        }
    }catch(error){
        next(error)
    }
})

router.post("/update/:listingId",async(req,res,next)=>{
    // if(req.user.id!==req.body.userRef){
    //     return next(errorHandler(401,"Unauthorised user"))
    // }
    try{
        console.log(req.params.listingId);
        const data = await Listing.findByIdAndUpdate(req.params.listingId,req.body,{ new:true});
        res.status(200).json("Update OK")
    }catch(error){
        next(error)
    }
})

export default router;