import { getOneUser } from "../../../utils/users/getOneUser.js";

export const getOneUserController = async (req, res, next) => {
	try {
		const user = await getOneUser(req.params);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
