import { data_source } from "../database";
import { Bus_Details } from "../entities/bus_details";
import { Users } from "../entities/user";
import { Cred } from "../models/Cred";
import { Credentials } from "../models/Credentials";
import { generateJWT, payload } from "../utils/jwtUtils";

export async function agent(cred: Cred) {
  try {
    const user_repository = data_source.getRepository(Users);
    const res = await user_repository.findOne({
      where: {
        mobile: cred.mobile,
      },
    });
    if (res?.password == cred.password && res.user_role === "agent") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}

export async function save_bus(details: Bus_Details) {
  try {
    const user_repository = data_source.getRepository(Bus_Details);
    const save_user = user_repository.save(details);
    return save_user;
  } catch (error) {
    console.error("bus:", error);
    throw new Error("new");
  }
}
