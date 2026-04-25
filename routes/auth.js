import express from "express";
import { login, register } from "../controller/authController.js";
import { loginRules, registrationRules } from "../validation/auth/index.js";
import validate from "../middleware/validate.js";
const authRoutes = express.Router();

authRoutes.post('/register', registrationRules, validate, register);
authRoutes.post('/login', loginRules, validate, login);


export default authRoutes;