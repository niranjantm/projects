import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    seatNumber:{
        type:String,
        required:true
    },
    userRef:{
        type:String,
        required:true
    }
},{timestamps:true})

const Booking = new mongoose.model("booking",bookingSchema);

export default Booking;