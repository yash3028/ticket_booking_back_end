import { data_source } from "../database";
import { Users } from "../entities/user";
import { Credentials } from "../models/Credentials";

export async function save_user(user: Users) {
    try{
        const user_repository = data_source.getRepository(Users)
        
        const saved_user = user_repository.save(user);
        return saved_user;
    }catch(error){
        throw error
    }

}

export async function login(credentials:Credentials) {
    try{
        const user_repository = data_source.getRepository(Users)
        const response = await user_repository.findOne({
            where:{
                mobile:credentials.mobile
            }
        })
        if (response?.password==credentials.password){
            return true
        }
        else{
            return false
        }
            
    }
    catch(error){
        throw error
    }
};

