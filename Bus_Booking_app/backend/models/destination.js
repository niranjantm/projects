import mongoose from "mongoose";

var desSchema = new mongoose.Schema({}, { strict: false });

const destination= mongoose.model("state_district",desSchema);

export default destination;