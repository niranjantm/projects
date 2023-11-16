import { json } from "express"
import Trips from "../models/trips.js"
const Buses = async(req,res,next)=>{
console.log(req.query);
try{
    let buses = await Trips.find({date:req.query.date,from:req.query.from,to:req.query.to})

    res.status(200).json(buses);
}catch(error){
    next(error)
}
}

export default Buses