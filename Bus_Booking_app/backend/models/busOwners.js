import mongoose from "mongoose";

const schema = new mongoose.Schema({},{strict:false});

const busOwners = mongoose.model("bus_Owner",schema);

export default busOwners;