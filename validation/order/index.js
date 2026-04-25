import { body, param } from "express-validator";
import { Book, BookImage } from "../../models/index.js";

export const createOrderRules = [
    body('books').notEmpty().withMessage({ message: "Books is required", code: "BOOKS_IS_REQUIRED" }),
    body('shipping_address').notEmpty().withMessage({ message: "Shipping address is required", code: "SHIPPING_IS_REQUIRED" }),
];

export default { createOrderRules };