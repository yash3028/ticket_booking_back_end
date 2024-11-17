import { data_source } from "../database";
import { Users } from "../entities/user";
import { Cred } from "../models/Cred";
import { Credentials } from "../models/Credentials";
import { generateJWT, payload } from "../utils/jwtUtils";

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
                mobile:credentials.mobile,
                user_role:credentials.user_role
            }
        });
        if (response?.password===credentials.password ){
            const userPayload = payload(response.mobile,response.email);  
            const token = generateJWT(userPayload);
            response.token=token
            await user_repository.save(response);
            console.log("generated" ,token)
            return { success: true, token };
        }
        else{
            return { success: false,token:null };
        }
            
    }
    catch(error){
        throw error
    }
};
export async function agent(cred:Cred) {
    try{
        const user_repository = data_source.getRepository(Users)
        const res = await user_repository.findOne({
            where:{
                mobile:cred.mobile,

            }
        })
        if(res?.password==cred.password && res.user_role==="agent"){
            return true
        }
        else{
            return false
        }
    }
    catch(error){
        throw error
    }
}
