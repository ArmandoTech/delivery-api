import { UPDATE_SUCSESSFULL } from "../../../constants/msgs.js";
import { updateUserByAdmin } from "../../../utils/users/updateUserByAdmin.js";

export const updateUserByAdminController = async (req, res, next) => {
	try {
		await updateUserByAdmin(req.params, req.body);
		res.status(200).json({ msg: UPDATE_SUCSESSFULL });
	} catch (error) {
		next(error);
	}
};
