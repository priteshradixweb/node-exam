
import { sendResponse } from '../utils/responseHelper.js';
export const register = (req, res) => {
    try {
        sendResponse(res, "Registered successfully");
    } catch (error) {
        sendResponse(res, error.message);
    }
}