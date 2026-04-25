import express from "express";
import { addBookImages, createBook, deleteBook, deleteBookImage, getBook, getBooks, updateBook } from "../controller/bookController.js";
import { createBookRules, getBookRule, updateBookRules, deleteBookRule, addBookImagesRule, deleteBookImageRule } from "../validation/book/index.js";
import validate from "../middleware/validate.js";
import auth from "../middleware/auth.js";
import upload, { handleMulterError } from '../middleware/upload.js';
const bookRoutes = express.Router();

bookRoutes.post('/', auth('admin'), createBookRules, validate,  createBook);
bookRoutes.patch('/:id', auth('admin'), updateBookRules, validate,  updateBook);
bookRoutes.get('/:id', getBookRule, validate, auth('admin'),  getBook);
bookRoutes.get('/', auth('admin'),  getBooks);
bookRoutes.delete('/:id', auth('admin'), deleteBookRule, validate,  deleteBook);
bookRoutes.post('/:id/images', auth('admin'), addBookImagesRule, validate, handleMulterError('attachment'),  addBookImages);
bookRoutes.delete('/:id/images/:imageId', auth('admin'), deleteBookImageRule, validate,  deleteBookImage);

export default bookRoutes;