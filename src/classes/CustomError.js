export class CustomError extends Error {
	status;
	constructor({ message, status = 500 }) {
		super();
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CustomError);
		}
		this.name = "CustomError";
		this.message = message;
		this.status = status;
	}
}
