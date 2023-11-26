import express from "express";
import User from "../models/User.js";
import UserSignUp from "../controller/UserSignUp.js";
import UserSignIn from "../controller/UserSignIn.js";


const router  = express.Router();

router.post("/sign-up",UserSignUp)
router.post("/sign-in",UserSignIn)

export default router;