export default class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = "AppError";
  }
  messageToUser() {
    return "An error occurred. Please try again";
  }
}
