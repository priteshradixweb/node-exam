import { body } from "express-validator";
import { User } from "../../models/index.js";

export const registrationRules = [
    body('name').trim().notEmpty().withMessage({ message: "Name is required", code: "NAME_IS_REQUIRED" }),
    body('email').trim().notEmpty().withMessage({ message: "Email is required", code: 'EMAIL_NOT_REQUIRED' }).isEmail().withMessage({ message: "Email must be valid email", code: 'EMAIL_NOT_VALID' }).custom(async value => {
        const existingUser = await User.findOne({ where: { email: value } });
        if (existingUser) {
            throw new Error('A user already exists with this e-mail address');
        }
    }).withMessage({ message: "A user already exists with this e-mail address", code: "EMAIL_ALREADY_EXITS" }),
    body('password').trim().notEmpty().withMessage({ message: "Password is required", code: 'PASSWORD_REQUIRED' }).isLength({ min: 10 }).withMessage({ message: "Password must be atleast 10 digit", code: 'PASSWORD_MIN_LENGTH' }),
    body('key').trim().optional()
];

export const loginRules = [
    body('email').trim().notEmpty().withMessage({ message: "Email is required", code: 'EMAIL_NOT_REQUIRED' }).isEmail().withMessage({ message: "Email must be valid email", code: 'EMAIL_NOT_VALID' }).custom(async value => {
        const existingUser = await User.findOne({ where: { email: value } });
        if (!existingUser) {
            throw new Error('user is invalid');
        }
    }).withMessage({ message: "Invalid cred", code: 'INVALID_CRED' }),
    body('password').trim().notEmpty().withMessage({ message: "Password is required", code: 'PASSWORD_REQUIRED' })
]

export default { registrationRules, loginRules };