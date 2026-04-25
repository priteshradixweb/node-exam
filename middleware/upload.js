
import multer from "multer";
import path from "path";
import fs from "fs";
import { sendError } from '../utils/responseHelper.js';

const ALLOWED_EXT = [".jpg", ".webp", ".png"];
const ALLOWED_MIME = ["application/webp", "image/jpeg", "image/png"];
const MAX_SIZE = 2 * 1024 * 1024;


if (!fs.existsSync('uploads/temp')) {
    fs.mkdirSync('uploads/temp', { recursive: true });
    fs.mkdirSync('uploads', { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/temp");
    },
    filename: (req, file, cb) => {
        cb(null, path.basename(file.originalname));
    },
});

const fileFilter = async (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
        const fileError = new Error("Only jpg, png webp files are allowed");
        fileError.code = 'INVALID_FILE';
        return cb(fileError, false);
    }
    if (!ALLOWED_MIME.includes(file.mimetype)) {
        const fileError = new Error("Only jpg, png webp files are allowed");
        fileError.code = 'INVALID_FILE';
        return cb(new Error(fileError), false);
    }
    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: MAX_SIZE },
});

export function handleMulterError(field) {
    return function (req, res, next) {
        upload.array(field)(req, res, function (err) {
            if (err) {
                let errorResponse = { message: err.message, code: err.code || 'INVALID' };
                sendError(res, 422, errorResponse);
            }
            next(err);
        });
    };
}

export default upload;