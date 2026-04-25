
import { matchedData } from 'express-validator';
import { sendError, sendResponse } from '../utils/responseHelper.js';
import * as authService from '../services/authService.js';

export const register = async (req, res) => {
    try {
        let data = matchedData(req, { includeOptionals: true });
        const response = await authService.createUser(data);
        sendResponse(res, "Registered successfully", response);
    } catch (error) {
        sendResponse(res, error.message);
    }
}

export const login = async (req, res) => {
    try {
        let data = matchedData(req, { includeOptionals: true });
        const response = await authService.login(data);
        sendResponse(res, "Login successfully", response);
    } catch (error) {
        let errorResponse = { message: error.message, code: error.code || 'INVALID' };
        sendError(res, 422, errorResponse);
    }
}