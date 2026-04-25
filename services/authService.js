import { User } from "../models/index.js"
import dotenv from "dotenv";
dotenv.config();

export const createUser = async (payload) => {
    const userData = payload;
    userData.role = 'customer'; 
    if(payload.key == process.env.ADMIN_SIGNUP_KEY){
        userData.role = 'admin;'
    }
    return await User.create(userData);
}