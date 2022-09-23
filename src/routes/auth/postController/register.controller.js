import { createUser } from "../../../utils/createUser.js";

export const registerController = async (req, res, next) => {
	try {
		const user = await createUser(req.body);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
