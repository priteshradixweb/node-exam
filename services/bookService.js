import { Book, User } from "../models/index.js"
import dotenv from "dotenv";
import BookImage from '../models/bookImage.js';
import fs from "fs";
import path from "path";
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
    let book = await Book.findOne({ where: condition, include: BookImage });
    book = book.get({ plain: true });
    return book;
}

export const getBookImage = async (bookImageId) => {
    let condition = { id: bookImageId };
    let bookImage = await BookImage.findOne({ where: condition });
    bookImage = bookImage.get({ plain: true });
    return bookImage;
}

export const getBooks = async (data) => {
    console.log('query', data);
    let books = await Book.findAll({ offset: Number(data.page || 1), limit: Number(data.limit || 10), include: BookImage });
    return books;
}

export const deleteBook = async (bookId) => {
    let books = await Book.update({ deletedAt: Date.now }, { where: { id: bookId } });
    return books;
}

export const addBookImages = async (bookId, files) => {
    console.log(bookId);
    files.forEach(async (file) => {
        const payload = { fileName: file.originalname, order: 1, book_id: bookId };
        await moveImageTempToUpload(file.originalname);
        await BookImage.create(payload);
    });
}

export const moveImageTempToUpload = async (fileName) => {
    const oldPath = path.join(process.cwd(), 'uploads/temp/', fileName);
    const newpath = path.join(process.cwd(), 'uploads/', fileName);
    await fs.promises.rename(oldPath, newpath)
}

export const deleteBookImage = async (bookId) => {
    const bookImage = await getBookImage(bookId);
    console.log(bookImage);
    const filePath = path.join(process.cwd(), 'uploads', bookImage.fileName);
    fs.unlinkSync(filePath);
    let books = await BookImage.destroy({ where: { id: bookId }});
    return books;
}