import busOwners from "../models/busOwners.js";
import Trips from "../models/trips.js";

const AvailableTrips = async (req, res, next) => {
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
    for (let i = 0; i < 7; i++) {
      const busOwnerId = randomBusOwnerId();
      const bus = await busOwners.findById(busOwnerId);
      const trip = await Trips.create({
        date: req.body.date,
        from: req.body.from,
        to: req.body.to,
        busOwnerId: busOwnerId,
        startTime:6+3*i,
        endTime:10+3*i,
        category:bus.category,
        SeatBooked:[],
        animeties:bus.animeties,
        busFare:1200,
        busName:bus.name,
        rating:bus.rating,
        totalSeats:bus.totalSeats
      });
      trips.push(trip)
    }
    return res.status(200).json(trips);
  } catch (error) {
    next(error);
  }
};

export default AvailableTrips;
