import express from "express";
import { createOrder } from "../controller/orderController.js";
import { createOrderRules } from "../validation/order/index.js";
import validate from "../middleware/validate.js";
import auth from "../middleware/auth.js";
const orderRoutes = express.Router();

orderRoutes.post('/', auth('customer'), createOrderRules, validate, createOrder);

export default orderRoutes;