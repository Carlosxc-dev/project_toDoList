import { CustomError } from "../config/CustomError";

// 404 error class
class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  statusCode = 404;
  serialize() {
    return { message: this.message };
  }
}

export { NotFoundError };
