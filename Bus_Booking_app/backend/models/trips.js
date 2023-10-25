import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    date:{
        type:Date,
        require:true,
    }
});

const trips = mongoose.model("trips",tripSchema);

export default trips;