import express from "express";
import { createBook } from "../controller/bookController.js";
import { createBookRules } from "../validation/book/index.js";
import validate from "../middleware/validate.js";
import auth from "../middleware/auth.js";
const bookRoutes = express.Router();

bookRoutes.post('/', auth('admin'), createBookRules, validate,  createBook);

export default bookRoutes;