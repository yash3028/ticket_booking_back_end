import { Router, Request, Response, NextFunction } from "express";
import { master_data } from "../entities/cities";
import { data_source } from "../database";
import { get_locations } from "../services/location_services";
import exp from "constants";
const router = Router();

router.get(
  "/locations",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send(await get_locations());
    } catch (error) {
      next(error);
    }
  }
);
export = router;
