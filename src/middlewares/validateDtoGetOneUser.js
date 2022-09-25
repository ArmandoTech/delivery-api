import { ERR_TYPE_ID } from "../constants/msgs.js";
import { areStrings } from "../utils/areStrings.js";

export const validateDtoGetOneUser = (req, res, next) => {
	const dto = req.query;
	if (dto.id && !areStrings([dto.id]))
		return res.status(400).json({ msg: ERR_TYPE_ID });
	next();
};
