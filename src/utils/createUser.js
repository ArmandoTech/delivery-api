import { CustomError } from "../classes/CustomError.js";
import { CREDENTIALS_NOT_AVALIABLE } from "../constants/msgs.js";
import { User } from "../models/User.js";
import { encryptPassword } from "./encryptPassword.js";
import { findOrCreate } from "./findOrCreate.js";

export const createUser = async ({
	username,
	email,
	password,
	name,
	verify = false
}) => {
	const [user, created] = await findOrCreate(
		User, // Model
		{ email, username }, // Search
		{
			// data
			name,
			verify,
			password: await encryptPassword(password)
		}
	);
	if (!created && user.verify)
		throw new CustomError({ message: CREDENTIALS_NOT_AVALIABLE, status: 400 });

	await user.save();
	return user;
};
