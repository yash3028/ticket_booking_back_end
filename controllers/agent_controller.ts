import express, { NextFunction, Request, Response, Router } from 'express'
import { STATUS_CODES } from 'http'
import { agent, save_bus } from '../services/user_service'


const router:Router = express.Router()

router.post("/profile",async(req:Request,res:Response,next:NextFunction)=>{
    try{
        res.status(200).json({message:'success'})
    }
    catch(error){
        next(error)
    }
})
router.post("/save-bus",async(req:Request,res:Response,next:NextFunction)=>{
    try{
        res.status(201).send(await save_bus(req.body))
    }catch(error){
        next(error)
    }
})
router.post("/agent",async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const agent_login:boolean=await agent(req.body)
        if(agent_login){
            res.status(200).json({message:"valid"})
        }
        else{
            res.status(401).json({message:"not valid"})
        }
    }
    catch(error){
        next(error)
    }
})
export = router