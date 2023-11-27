import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    busOwnerId: {
      type: String,
      
    },
    startTime: {
      type: Number,
    },
    endTime: {
      type: Number,
    },
    category: {
      type: String,
    },
    SeatBooked: {
      type: Array,
    },
    seats:{
      type:Array
    },
    bus_on: {
      type: String,
    },
    animeties: {
      type: Array,
    },
    busFare: {
      type: Number,
    },
    busName: {
      type: String,
    },
    rating:{
      type:Number
    },
    totalSeats:{
      type:Number
    }
  },
  { timestamps: true }
);

const Trips = mongoose.model("trips", tripSchema);

export default Trips;
