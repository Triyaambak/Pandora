import CustomError from "./CustomError.js";
import { StatusCodes } from "http-status-codes";

class BadRequestError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

export default BadRequestError;
