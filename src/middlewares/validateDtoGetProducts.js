import {
	ERR_DESCRIPTION_TYPE,
	ERR_PRICE_TYPE,
	ERR_TITLE_TYPE
} from "../constants/msgs.js";
import { areStrings } from "../utils/common/areStrings.js";

export const validateDtoGetProducts = (req, res, next) => {
	const dto = req.query;
	const price = Number(dto.price);
	console.log(typeof price);
	if (dto.title && !areStrings([dto.title]))
		return res.status(400).json({ msg: ERR_TITLE_TYPE });
	if (dto.description && !areStrings([dto.description]))
		return res.status(400).json({ msg: ERR_DESCRIPTION_TYPE });
	if (dto.price && typeof price !== "number")
		return res.status(400).json({ msg: ERR_PRICE_TYPE });
	next();
};
