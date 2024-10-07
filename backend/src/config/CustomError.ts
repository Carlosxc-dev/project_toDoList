export abstract class CustomError extends Error {
	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, CustomError.prototype);
		// This is to fix the prototype chain issue when extending built-in classes like Error in TypeScript
	}

	abstract statusCode: number;
	abstract serialize(): { message: string };
}

