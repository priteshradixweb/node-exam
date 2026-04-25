import express from "express";
import { register } from "../controller/authController.js";
import { registrationRules } from "../validation/auth/index.js";
import validate from "../middleware/validate.js";
const authRoutes = express.Router();

authRoutes.post('/register', registrationRules, validate, register);

export default authRoutes;