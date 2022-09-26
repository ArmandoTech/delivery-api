import { getUser } from "../../../utils/getUsers.js";

export const getAllUsersController = async (req, res, next) => {
	try {
		const user = await getUser(req.query);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
