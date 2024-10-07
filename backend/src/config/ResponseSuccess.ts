// src/utils/responses.ts

const ResponseSuccess = {
	userCreated: {
		statusCode: 201,
		message: "User created successfully!",
	},
	userUpdated: {
		statusCode: 200,
		message: "User updated successfully!",
	},
	userDeleted: {
		statusCode: 200,
		message: "User deleted successfully!",
	},
	loginSuccess: {
		statusCode: 200,
		message: "Login successful!",
	},
	operationCompleted: {
		statusCode: 200,
		message: "Operation completed successfully!",
	},
};

export { ResponseSuccess };

