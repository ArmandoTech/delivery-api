import { getUserByUsernameRegex } from "../../../utils/getUserByUsername.js";

export const getUserByUsername = async (req, res, next) => {
	try {
		const user = await getUserByUsernameRegex(req.params);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
