import {
	CHANGE_NOT_ALLOWED,
	ERR_EMAIL_TYPE,
	ERR_ID_TYPE,
	ERR_IMAGE_TYPE,
	ERR_PASSWORD_TYPE,
	ERR_PHONE_TYPE,
	ERR_USERNAME_TYPE,
	REQUIRED_ID
} from "../constants/msgs.js";
import { areStrings } from "../utils/areStrings.js";

export const validateDtoUpdateUser = (req, res, next) => {
	const dto = req.body;
	const { id } = req.params;
	if (!id) return res.status(400).json({ msg: REQUIRED_ID });
	if (id && !areStrings([id]))
		return res.status(400).json({ msg: ERR_ID_TYPE });
	if (dto.username && !areStrings([dto.username]))
		return res.status(400).json({ msg: ERR_USERNAME_TYPE });
	if (dto.email && !areStrings([dto.email]))
		return res.status(400).json({ msg: ERR_EMAIL_TYPE });
	if (dto.password && !areStrings([dto.password]))
		return res.status(400).json({ msg: ERR_PASSWORD_TYPE });
	if (dto.image && !areStrings([dto.image]))
		return res.status(400).json({ msg: ERR_IMAGE_TYPE });
	if (dto.phone && typeof dto.phone !== "number")
		return res.status(400).json({ msg: ERR_PHONE_TYPE });
	if (dto.role) return res.status(400).json({ msg: CHANGE_NOT_ALLOWED });
	if (dto.verify) return res.status(400).json({ msg: CHANGE_NOT_ALLOWED });
	next();
};
