import { validationResult } from "express-validator";
import { sendError } from "../utils/responseHelper.js";

const validate = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const firstError = result.errors[0].msg;
        return sendError(res, 422, firstError);
    }
    next();
}
export default validate;