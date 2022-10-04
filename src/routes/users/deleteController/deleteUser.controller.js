import { deleteUser } from "../../../utils/users/deleteUser.js";

export const deleteUserController = async (req, res, next) => {
	try {
		await deleteUser(req.params);
		res.status(200).json({ msg: "User deleted correctly" });
	} catch (error) {
		next(error);
	}
};
