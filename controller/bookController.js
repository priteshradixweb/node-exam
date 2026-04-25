
import { matchedData } from 'express-validator';
import { sendError, sendResponse } from '../utils/responseHelper.js';
import * as bookService from '../services/bookService.js';

export const createBook = async (req, res) => {
    try {
        let data = matchedData(req, { includeOptionals: true });
        const response = await bookService.createBook(data);
        sendResponse(res, "Book created successfully", response);
    } catch (error) {
        sendResponse(res, error.message);
    }
}