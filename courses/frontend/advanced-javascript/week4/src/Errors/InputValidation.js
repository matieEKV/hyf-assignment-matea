import AppError from "./AppError.js";

export default class InputValidation extends AppError {
  constructor(message) {
    super(message);
    this.name = "InputValidation";
  }
  messageToUser() {
    return `Invalid input - check error message for more info ${this.message}`;
  }
}
