import {
	CHANGE_NOT_ALLOWED,
	ERR_ID_TYPE,
	ERR_USERNAME_TYPE,
	ERR_VERIFY_TYPE,
	REQUIRED_ID
} from "../constants/msgs.js";
import { ADMIN, CLIENT, MOTORIZED } from "../constants/roles.js";
import { areStrings } from "../utils/common/areStrings.js";

const roles = [ADMIN, CLIENT, MOTORIZED];
export const validateDtoUpdateUserByAdmin = (req, res, next) => {
	const dto = req.body;
	const { id } = req.params;
	if (!id) return res.status(400).json({ msg: REQUIRED_ID });
	if (id && !areStrings([id]))
		return res.status(400).json({ msg: ERR_ID_TYPE });
	if (dto.username && !areStrings([dto.username]))
		return res.status(400).json({ msg: ERR_USERNAME_TYPE });
	if (dto.role && !roles.includes(dto.role))
		return res.status(400).json({ msg: CHANGE_NOT_ALLOWED });
	if (dto.verify && typeof dto.verify !== "boolean")
		return res.status(400).json({ msg: ERR_VERIFY_TYPE });
	next();
};
