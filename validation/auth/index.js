import { body } from "express-validator";

export const registrationRules = [
    body('name').trim().notEmpty().withMessage({ message: "Name is required", code: "NAME_IS_REQUIRED" }),
    body('email').trim().notEmpty().withMessage({ message: "Email is required", code: 'EMAIL_NOT_REQUIRED' }).isEmail().withMessage({ message: "Email must be valid email", code: 'EMAIL_NOT_VALID' }).custom(async value => {
        const existingUser = await Users.findOne({ where: { email: value } });
        if (existingUser) {
            throw new Error('A user already exists with this e-mail address');
        }
    }),
    body('password').trim().notEmpty().withMessage({ message: "Password is required", code: 'PASSWORD_REQUIRED' }).isLength({ min: 10 }).withMessage({ message: "Password must be atleast 10 digit", code: 'PASSWORD_MIN_LENGTH' })
];

export default { registrationRules };