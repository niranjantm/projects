import Trips from "../models/trips.js"

const TripDetail = async(req,res,next)=>{
    const {id} = req.query;
    try{
        
        const trip = await Trips.findById(id);
         
        res.status(200).json(trip);

    }catch(error){
        next(error)
    }
    
}
export default TripDetail;