import { body } from "express-validator";

export const createBookRules = [
    body('title').trim().notEmpty().withMessage({ message: "Title is required", code: "TITLE_IS_REQUIRED" }),
    body('author').trim().notEmpty().withMessage({ message: "Author is required", code: "AUTHOR_IS_REQUIRED" }),
    body('price').trim().notEmpty().withMessage({ message: "Price is required", code: 'PRICE_REQUIRED' }).isDecimal().withMessage({ message: "Price must be number", code: 'PRICE_MUST_BE_NUMBER' }),
    body('stock_quantity').trim().notEmpty().withMessage({ message: "Stock is required", code: 'STOCK_REQUIRED' }).isNumeric().withMessage({ message: "Stock must be number", code: 'STOCK_MUST_BE_NUMBER' }),
];


export default { createBookRules };