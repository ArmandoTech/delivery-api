import { User } from "../models/User.js";
import { encryptPassword } from "./encryptPassword.js";
import { findOrCreate } from "./findOrCreate.js";

export const createUser = async ({ username, email, password }) => {
	return await findOrCreate(
		User, // Model
		{ email, username }, // Search
		{
			// data
			password: await encryptPassword(password)
		}
	);
};
