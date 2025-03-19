import express, { NextFunction, Request, Response, Router } from "express";
import { STATUS_CODES } from "http";
import { login, save_user } from "../services/user_service";
import { validation } from "../middlewares/verify";
import { data_source } from "../database";
import { Bus_Details } from "../entities/bus_details";

const router: Router = express.Router();
router.post(
  "/save-user",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).send(await save_user(req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const login_response = await login(req.body);
      console.log("Login response:", login_response);

      if (login_response.success) {
        res
          .status(200)
          .json({ message: "successful", token: login_response.token });
      } else {
        res.status(401).json({ message: "unauthorized" });
      }
    } catch (error) {
      next(error);
    }
  }
);

export = router;
