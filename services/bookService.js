import { Book, User } from "../models/index.js"
import dotenv from "dotenv";
dotenv.config();

export const createBook = async (payload) => {
    let book = await Book.create(payload);
    return book;
}
