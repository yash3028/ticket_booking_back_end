import express, { Application, NextFunction, Request, Response } from "express";
import user_router from "./controllers/user_controller";
import cors from "cors";
import { validation } from "./middlewares/verify";
import agent_router from "./controllers/agent_controller";
import master_router from "./controllers/master_controller";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/agent", validation, agent_router);
app.use("/users", user_router);
app.use("/master_data", validation, master_router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error.message);
  if (error instanceof Error) {
    res.status(400).json({ message: error.message });
  }
  res.status(500).json("Error");
});
export default app;
