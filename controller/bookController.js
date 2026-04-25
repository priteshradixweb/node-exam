
import { matchedData } from 'express-validator';
import { sendError, sendResponse } from '../utils/responseHelper.js';
import * as bookService from '../services/bookService.js';
import { param } from 'express-validator';

export const createBook = async (req, res) => {
    try {
        let data = matchedData(req, { includeOptionals: true });
        const response = await bookService.createBook(data);
        sendResponse(res, "Book created successfully", response);
    } catch (error) {
        sendResponse(res, error.message);
    }
}

export const updateBook = async (req, res) => {
    try {
        let data = matchedData(req, { includeOptionals: true });
        const { id } = matchedData(req, { param: true });
        const response = await bookService.updateBook(data, id);
        sendResponse(res, "Book updated successfully", response);
    } catch (error) {
        sendResponse(res, error.message);
    }
}