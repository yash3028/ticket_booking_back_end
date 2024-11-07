import express, { NextFunction, Request, Response, Router } from 'express'
import { STATUS_CODES } from 'http'
import { login, save_user } from '../services/user_service'


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
       const login_response:boolean = await login(req.body)
       if (login_response){
        res.status(200).send({message:"successful"})
       }
       else{
        res.status(401).send({message:"unauthorized"})
       }
       
    }
    catch(error){
        next(error)
    }
})

export = router



