import { ADMIN_ROLE_NEEDED } from "../constants/msgs.js";
import { ADMIN } from "../constants/roles.js";

export const validationAdmin = async (req, res, next) => {
	try {
		const { user } = req;
		if (!user.role !== ADMIN)
			return res.status(401).json({ msg: ADMIN_ROLE_NEEDED });
		next();
	} catch (error) {
		res.status(401).json({ msg: ADMIN_ROLE_NEEDED });
	}
};
