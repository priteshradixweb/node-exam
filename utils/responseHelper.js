

export const sendResponse = (res, message = "Request successfully", payload = null, status = 200) => {
    let response = { status: true, message };
    if (payload) {
        response = { ...response, data: payload };
    }
    res.status(status).json(response);
};

export const sendServerError = (res, err) => {
    return sendError(res, err?.message || "Server Error", 500);
};

export const sendError = (res, status = 400, errorPayload = null, message = null) => {
    let response = { success: false };
    if (message) {
        response = { ...response, message }
    }
    if (errorPayload) {
        response = { ...response, error: errorPayload };
    }
    res.status(status).json(response)
};
