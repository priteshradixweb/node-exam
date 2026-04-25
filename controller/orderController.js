
import { matchedData } from 'express-validator';
import { sendError, sendResponse } from '../utils/responseHelper.js';
import { param } from 'express-validator';
import Book from '../models/book.js';
import { Op } from 'sequelize';
import { Order, OrderAddress, OrderProduct } from '../models/index.js';

export const createOrder = async (req, res) => {
    try {
        let data = matchedData(req, { includeOptionals: true });
        const condition = [];
        const quantityMap = new Map();
        const user = req.currentUser;
        data.books.forEach(element => {
            condition.push({ id: element.book_id });
            quantityMap[element.book_id] = element.quantity;
        });


        const books = await Book.findAll({ where: { [Op.or]: condition } });
        let isQuantityValid = true;
        let totalPrice = 0;
        let orderProductPayload = [];
        let lineTotal = 0;
        books.forEach(book => {
            console.log(book);
            if (quantityMap[book.id] > book.quantity) {
                isQuantityValid = false;
            }
            console.log(quantityMap);
            lineTotal = quantityMap[book.id] * Number(book.price)
            totalPrice += lineTotal;
            orderProductPayload.push({ bookTitle: book.title, bookAuthor: book.author, unitPrice: book.price, quantity: quantityMap[book.id], lineTotal: totalPrice });
        });

        if (!isQuantityValid) {
            sendError(res, 422, data, 'Quantity is not available');
        }

        const order = await Order.create({ user_id: user.id, totalPrice });
        let orderProductData = [];
        orderProductPayload.forEach(orderProduct => {
            orderProductData.push({ ...orderProduct, order_id: order.id });
        });

        OrderProduct.bulkCreate(orderProductData);

        let shipping_address = data.shipping_address;
        shipping_address.type = 'shipping';
        shipping_address.order_id = order.id ;
        let billing_address = data.billing_address;
        if (!billing_address) {
            billing_address = shipping_address;
            billing_address.type = 'billing';
            billing_address.order_id = order.id ;
        }
        await OrderAddress.create(shipping_address);
        await OrderAddress.create(billing_address);
        const response = await Order.findOne({ where: { id: order.id }, include: [OrderProduct, OrderAddress] })
        sendResponse(res, "Order created successfully", response);

    } catch (error) {
        sendResponse(res, error.message);
    }
}