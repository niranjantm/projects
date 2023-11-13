import express from "express";
import Trips from "../models/trips.js";

const router  = express.Router();


router.post("/trips",async(req,res,next)=>{
    
    try{
    console.log(req.body);
    const trip = await Trips.create(req.body);

    res.status(200).json(trip)
    }catch(error){
        next(error);
    }
})

router.get("/api/get",(req,res,next)=>{

})

export default router;