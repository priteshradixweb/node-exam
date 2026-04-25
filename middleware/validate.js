import { validationResult } from "express-validator";
import { sendError } from "../utils/responseHelper.js";

const validate = (req, res, next) => {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
        const firstError = result.errors[0].msg;
        let errorPayload = { message: firstError.msg, errorCode: firstError.code  };
        return sendError(res, 422, firstError);
    }
    next();
}
export default validate;