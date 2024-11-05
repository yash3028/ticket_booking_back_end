import express, { Application, NextFunction, Request, Response } from "express";
import user_router from "./controllers/user_controller";
const app: Application = express();

app.use(express.json())

app.use("/users", user_router);

app.use((error:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log(error.message)
    res.status(500).send("Error")

})

export default app;
