
import { sendError } from "../utils/responseHelper.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const auth = (type = 'admin') => async (req, res, next) => {
    const authHeader = req?.headers['authorization'];
    if (!authHeader?.startsWith('Bearer ')) {
        return sendError(res, 401, { message: "Invalid token", code: "INVALID_TOKEN" });
    }

    const token = authHeader.split(' ')[1];
    try {
        const ok = await jwt.verify(token, process.env.JWT_SECRET);
        if (ok.role == type) next();
    } catch (error) {
        console.log(`error`, error);
        return sendError(res, 401, { message: "Invalid token", code: "INVALID_TOKEN" });
    }

};

export default auth;