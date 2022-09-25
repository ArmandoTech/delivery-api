import {
	ERR_EMAIL_TYPE,
	ERR_TYPE_ACTIVE,
	ERR_USERNAME_TYPE,
	UNEXPECTED_ROLE
} from "../constants/msgs.js";
import { ADMIN, CLIENT, MOTORIZED } from "../constants/roles.js";
import { areStrings } from "../utils/areStrings.js";

const roles = [CLIENT, ADMIN, MOTORIZED];
const status = ["true", "false"];

export const validateDtoGetUsers = (req, res, next) => {
	const dto = req.query;
	if (dto.role && !roles.includes(dto.role))
		return res.status(400).json({ msg: UNEXPECTED_ROLE });
	if (dto.active && !status.includes(dto.active) && !areStrings([dto.active]))
		return res.status(400).json({ msg: ERR_TYPE_ACTIVE });
	if (dto.username && !areStrings([dto.username]))
		return res.status(400).json({ msg: ERR_USERNAME_TYPE });
	if (dto.email && !areStrings([dto.email]))
		return res.status(400).json({ msg: ERR_EMAIL_TYPE });
	next();
};
