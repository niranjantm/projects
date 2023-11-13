import mongoose from "mongoose";
function randomBusOwnerId() {
  const arr = [
    "65310433d5a3a18df6257041",
    "65310433d5a3a18df625703b",
    "65310433d5a3a18df6257040",
    "65310433d5a3a18df625703e",
    "65310433d5a3a18df6257044",
    "65310433d5a3a18df6257042",
    "65310433d5a3a18df6257043",
    "65310433d5a3a18df625703d",
    "65310433d5a3a18df625703c",
    "65310433d5a3a18df625703f",
  ];
  let num = Math.random();
  let index = Math.floor(arr.length * num);
  return arr[index];
}
const tripSchema = new mongoose.Schema(
  {
    date: {
      type: Number,
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
      default: randomBusOwnerId(),
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
  },
  { timestamps: true }
);

const Trips = mongoose.model("trips", tripSchema);

export default Trips;
