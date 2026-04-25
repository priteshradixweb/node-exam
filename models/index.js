import Book from "./book.js";
import BookImage from './bookImage.js';
import User from "./user.js";
import Order from "./order.js";
import OrderProduct from "./orderProduct.js";
import OrderAddress from "./orderAddress.js";

Book.hasMany(BookImage, { foreignKey: 'book_id' });
User.hasMany(Order, { foreignKey: 'user_id' });
Order.hasMany(OrderProduct, { foreignKey: 'order_id' });
Order.hasMany(OrderAddress, { foreignKey: 'order_id' });

export { Book, User, BookImage, Order, OrderProduct, OrderAddress };