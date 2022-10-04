import { updateUser } from "../../../utils/users/updateUser.js";

export const updateUserController = async (req, res, next) => {
	try {
		await updateUser(req.params, req.body);
		res.status(200).json({ msg: "User updated correctly" });
	} catch (error) {
		next(error);
	}
};
