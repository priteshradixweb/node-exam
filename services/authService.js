import { User } from "../models/index.js"
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
dotenv.config();

export const createUser = async (payload) => {
    const userData = payload;
    userData.role = 'customer';
    if (payload.key == process.env.ADMIN_SIGNUP_KEY) {
        userData.role = 'admin'
    }
    userData.password = await bcrypt.hash(payload.password, 10);
    let user = await User.create(userData);
    user = user.get({ plain: true });
    delete user.password;
    return user;
}

export const login = async (payload) => {
    const user = await getUser(payload);
    const ok = await bcrypt.compare(payload.password, user.password)
    if (!ok) {
        const error = new Error("Invalid cred");
        error.code = 'INVALID_CRED';
        throw error;
    }
    console.log(process.env.JWT_SECRET);
    user.token = jwt.sign(user, process.env.JWT_SECRET);
    return user;
}

export const getUser = async (data) => {
    let condition = {};
    console.log(data);
    if (data.id) {
        condition = { id: data.id };
    }
    if (data.email) {
        condition = { email: data.email };
    }
    let user = await User.findOne({ where: condition });
    user = user.get({ plain: true });
    return user;
}