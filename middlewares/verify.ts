import { Request, Response, NextFunction } from "express";
import { data_source } from "../database";
import { Users } from "../entities/user";
import { verification } from "../utils/jwtUtils";

export const validation = async (
  req: Request,
  res: Response,
  next: NextFunction
):Promise<void> => {
  try {
    const authheader = req.headers.authorization;
    if (!authheader) {
      res.status(401).json({ message: "header is missing" });
      return
    
    }
    const token: string | undefined = authheader?.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "token is missing" });
      return
    } else {
      const validate = await verification(token);
      if (!validate) {
        res.status(401).json({ message: "invalid token" });
        return
      } else {
        const user_repository = data_source.getRepository(Users);
        const response = await user_repository.findOne({
          where: { mobile: validate.mobile, token },
        });

        if (!response) {
          res.status(401).json({ message: "unauthorized user" });
          return
        }
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};
