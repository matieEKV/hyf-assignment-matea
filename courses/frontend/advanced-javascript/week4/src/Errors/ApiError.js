import AppError from "./AppError.js";

export default class ApiError extends AppError {
  constructor(message, statusCode) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
  messageToUser() {
    return `ApiError - see status code ${this.statusCode}`;
  }
}
