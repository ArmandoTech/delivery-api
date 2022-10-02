import {
	ERR_DESCRIPTION_TYPE,
	ERR_IMAGE_TYPE,
	ERR_NOT_ARRAY,
	ERR_PARAMETERS_MISSING,
	ERR_PRICE_TYPE,
	ERR_SIZEDTO_TYPE,
	ERR_TITLE_TYPE
} from "../constants/msgs.js";
import { areStrings } from "../utils/areStrings.js";

export const validateDtoCreateProducts = (req, res, next) => {
	const dto = req.body;
	const sideDto = Object.entries(dto).length;
	if (sideDto !== 5) return res.status(400).json({ msg: ERR_SIZEDTO_TYPE });
	if (
		!dto.name ||
		!dto.description ||
		!dto.price ||
		!dto.images ||
		!dto.categories
	)
		return res.status(400).json({ msg: ERR_PARAMETERS_MISSING });
	if (!areStrings([dto.name]))
		return res.status(400).json({ msg: ERR_TITLE_TYPE });
	if (!areStrings([dto.description]))
		return res.status(400).json({ msg: ERR_DESCRIPTION_TYPE });
	if (typeof dto.price !== "number")
		return res.status(400).json({ msg: ERR_PRICE_TYPE });
	if (!areStrings([dto.images]))
		return res.status(400).json({ msg: ERR_IMAGE_TYPE });
	if (!Array.isArray(dto.categories))
		return res.status(400).json({ msg: ERR_NOT_ARRAY });
	next();
};
