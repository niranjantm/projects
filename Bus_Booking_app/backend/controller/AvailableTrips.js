import busOwners from "../models/busOwners.js";
import Trips from "../models/trips.js";
import moment from "moment"

const AvailableTrips = async (req, res, next) => {
  
  let tripsData = await Trips.find({date:req.body.date,from:req.body.from,to:req.body.to})
  if(tripsData.length>0){
    console.log("tripsData--->",tripsData)
    return res.status(200).json(tripsData)
  }
  else{
  let trips = [];

  try {
    console.log(req.body.date);
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
    for (let i = 0; i < 6; i++) {
      const busOwnerId = randomBusOwnerId();
      const bus = await busOwners.findById(busOwnerId);
      const trip = await Trips.create({
        date: req.body.date,
        from: req.body.from,
        to: req.body.to,
        busOwnerId: busOwnerId,
        startTime:6+3*i,
        endTime:9+3*i,
        category:bus.category,
        SeatBooked:[],
        animeties:bus.animeties,
        busFare:1200,
        busName:bus.name,
        rating:bus.rating,
        totalSeats:bus.totalSeats
      });
      trips.push(trip)
      console.log("trips--->",trips)
    }
    res.status(200).json(trips);
  } catch (error) {
    next(error);
  }
}
};

export default AvailableTrips;
