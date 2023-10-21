import express from "express";

const router  = express.Router();

router.use(express.json());

router.post("/api/post",(req,res,next)=>{
    const data = req.body;
    res.status(200).send("STATUS : OK");
})

router.get("/api/get",(req,res,next)=>{

})

export default router;