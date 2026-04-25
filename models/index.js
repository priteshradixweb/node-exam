import Book from "./book.js";
import User from "./user.js";
import BookImage from './bookImage.js';

Book.hasMany(BookImage, { foreignKey: 'book_id' });
export { Book, User, BookImage };