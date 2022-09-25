import { User } from "../models/User.js";
import { encryptPassword } from "./encryptPassword.js";
import { findOrCreate } from "./findOrCreate.js";

export const createUser = async ({ username, email, password, name }) => {
	return await findOrCreate(
		User, // Model
		{ email, username }, // Search
		{
			// data
			name,
			password: await encryptPassword(password)
		}
	);
};
