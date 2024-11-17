import express, { NextFunction, Request, Response, Router } from 'express'
import { STATUS_CODES } from 'http'
import { agent, login, save_user } from '../services/user_service'
import {validation} from '../middlewares/verify'

const router:Router = express.Router()

router.post("/save-user",async(req:Request,res:Response,next:NextFunction)=>{
    try{
        res.status(201).send(await save_user(req.body))
    }catch(error){
        next(error)
    }
})

router.post("/login",async(req:Request,res:Response,next:NextFunction)=>{
    try{
       const login_response = await login(req.body)
       console.log("Login response:", login_response);

       if (login_response.success){
        res.status(200).json({message:"successful",token:login_response.token})
       }
       else{
        res.status(401).json({message:"unauthorized"})
       }
       
    }
    catch(error){
        next(error)
    }
});

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



