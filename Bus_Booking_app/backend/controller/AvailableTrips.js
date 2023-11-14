import Trips from "../models/trips.js";
const AvailableTrips = async(req,res,next)=>{
    
    try{
    console.log(req.body);
    const trip = await Trips.create(req.body);
    return res.status(200).json(trip)
    }catch(error){
        next(error);
    }
}

export default AvailableTrips;