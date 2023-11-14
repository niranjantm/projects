import express from "express";
import AvailableTrips from "../controller/AvailableTrips.js";
import locations from "../controller/GetLocations.js";


const router  = express.Router();


router.post("/trips",AvailableTrips)

router.get("/locations/get",locations)

export default router;