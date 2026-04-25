import { Book, User } from "../models/index.js"
import dotenv from "dotenv";
dotenv.config();

export const createBook = async (payload) => {
    let book = await Book.create(payload);
    delete book.deletedAt;
    return book;
}


export const updateBook = async (payload, bookId) => {
    await Book.update(payload, { where: { id: bookId } });
    let book = getBook(bookId);
    delete book.deletedAt;
    return book;
}

export const getBook = async (bookId) => {
    let condition = { id: bookId };
    let book = await Book.findOne({ where: condition });
    book = book.get({ plain: true });
    return book;
}