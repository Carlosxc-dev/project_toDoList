import { CustomError } from "../config/CustomError";

class AuthenticationError extends CustomError {
	constructor(public message: string) {
		super(message);
		Object.setPrototypeOf(this, AuthenticationError.prototype);
	}

	statusCode = 401;
	serialize() {
		return { message: this.message };
	}
}

export { AuthenticationError };

