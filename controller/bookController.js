
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

export const getBooks = async (req, res) => {
    try {
        let data = req.query;
        const response = await bookService.getBooks(data);
        sendResponse(res, "Book found", response);
    } catch (error) {
        sendResponse(res, error.message);
    }
}


export const getBook = async (req, res) => {
    try {
        const { id } = matchedData(req, { param: true });
        const response = await bookService.getBook(id);
        sendResponse(res, "Book found", response);
    } catch (error) {
        sendResponse(res, error.message);
    }
}


export const deleteBook = async (req, res) => {
    try {
        const { id } = matchedData(req, { param: true });
        await bookService.deleteBook(id);
        sendResponse(res, "Book deleted successfully");
    } catch (error) {
        sendResponse(res, error.message);
    }
}

export const addBookImages = async (req, res) => {
    try {
        const files = req.files;
        const { id } = matchedData(req, { param: true });
        console.log(id);
        const response = await bookService.addBookImages(id, files);
        sendResponse(res, "Book added successfully", response);
    } catch (error) {
        sendResponse(res, error.message);
    }
}

export const deleteBookImage = async (req, res) => {
    try {
        const { id, imageId } = matchedData(req, { param: true });
        const response = await bookService.deleteBookImage(imageId);
        sendResponse(res, "Book Image deleted successfully", response);
    } catch (error) {
        sendResponse(res, error.message);
    }
}
