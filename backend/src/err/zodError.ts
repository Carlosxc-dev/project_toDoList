import { CustomError } from "../utils/CustomError";

class ZodError extends CustomError {
	constructor(public message: string) {
		super(message);
		Object.setPrototypeOf(this, ZodError.prototype);
	}

	statusCode = 401;
	serialize() {
		return { message: this.message };
	}
}

export { ZodError };

