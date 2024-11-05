import { Users, user_repository } from "../entities/user";

export async function save_user(user: Users) {
    try{
        const saved_user = user_repository.save(user);
        return saved_user;
    }catch(error){
        throw error
    }

}
