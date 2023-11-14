import destination from "../models/destination.js"

const locations = async(req,res,next)=>{

    try{

        let from = await destination.find({})
        res.status(200).json(from);
    }catch(error){
        next(error)
    }
}

export default locations