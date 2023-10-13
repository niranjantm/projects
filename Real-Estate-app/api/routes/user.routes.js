import express from "express"

const router = express.Router();

router.get("/test",((req,res)=>{
    res.send({
        Message:'get is working'
    })
}));

export default router;