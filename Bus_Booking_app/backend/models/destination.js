import mongoose from "mongoose";

var thingSchema = new mongoose.Schema({}, { strict: false });

const destination= mongoose.model("state_district",thingSchema);

export default destination;