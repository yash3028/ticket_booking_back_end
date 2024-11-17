import express, { NextFunction, Request, Response, Router } from 'express'
import { STATUS_CODES } from 'http'


const router:Router = express.Router()

router.post("/profile",async(req:Request,res:Response,next:NextFunction)=>{
    try{
        res.status(200).json({message:'success'})
    }
    catch(error){
        next(error)
    }
})

export = router