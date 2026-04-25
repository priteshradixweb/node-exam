
import { matchedData } from 'express-validator';
import { sendResponse } from '../utils/responseHelper.js';
import * as authService from '../services/authService.js';

export const register = async(req, res) => {
    try {
        let data = matchedData(req, { includeOptionals: true });
        await authService.createUser(data);
        sendResponse(res, "Registered successfully", data);
    } catch (error) {
        sendResponse(res, error.message);
    }
}