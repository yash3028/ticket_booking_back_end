import express, { NextFunction, Request, Response, Router } from 'express'
import { STATUS_CODES } from 'http'
import { save_user } from '../services/user_service'

const router:Router = express.Router()

router.post("/save-user",async(req:Request,res:Response,next:NextFunction)=>{
    try{
        res.status(201).send(await save_user(req.body))
    }catch(error){
        next(error)
    }
})

export = router