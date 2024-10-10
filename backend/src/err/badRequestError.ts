import { CustomError } from "../config/CustomError";

class BadRequestError extends CustomError {
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  statusCode = 404;
  serialize() {
    return { message: this.message };
  }
}

export { BadRequestError };
