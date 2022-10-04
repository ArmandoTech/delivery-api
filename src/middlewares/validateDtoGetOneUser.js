import {
	ERR_ID_TYPE,
	ERR_SIZEDTO_TYPE,
	REQUIRED_ID
} from "../constants/msgs.js";
import { areStrings } from "../utils/common/areStrings.js";

export const validateDtoGetOneUser = (req, res, next) => {
	const dto = req.params;
	const sizeDto = Object.entries(dto).length;
	if (sizeDto !== 1) return res.status(400).json({ msg: ERR_SIZEDTO_TYPE });
	if (!dto.id) return res.status(400).json({ msg: REQUIRED_ID });
	if (dto.id && !areStrings([dto.id]))
		return res.status(400).json({ msg: ERR_ID_TYPE });
	next();
};
