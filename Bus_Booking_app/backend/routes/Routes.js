import express from "express";
import AvailableTrips from "../controller/AvailableTrips.js";
import Triplocations from "../controller/GetLocations.js";
import Buses from "../controller/Buses.js"


const router  = express.Router();


router.post("/trips",AvailableTrips)

router.get("/locations/get",Triplocations)

router.get("/availableBuses/get",Buses)

export default router;