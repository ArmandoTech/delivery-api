import { deleteUser } from "../../../utils/deleteUser.js";

export const deleteUserController = async (req, res, next) => {
	try {
		const user = await deleteUser(req.query);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
