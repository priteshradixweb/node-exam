import express from "express";
import { createBook, updateBook } from "../controller/bookController.js";
import { createBookRules, updateBookRules } from "../validation/book/index.js";
import validate from "../middleware/validate.js";
import auth from "../middleware/auth.js";
const bookRoutes = express.Router();

bookRoutes.post('/', auth('admin'), createBookRules, validate,  createBook);
bookRoutes.patch('/:id', auth('admin'), updateBookRules, validate,  updateBook);

export default bookRoutes;