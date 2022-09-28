import {
	ERR_DESCRIPTION_TYPE,
	ERR_ID_TYPE,
	ERR_IMAGE_TYPE,
	ERR_PRICE_TYPE,
	ERR_SIZEDTO_TYPE,
	ERR_TITLE_TYPE,
	REQUIRED_ID
} from "../constants/msgs.js";
import { areStrings } from "../utils/areStrings.js";

export const validateDtoUpdateProduct = (req, res, next) => {
	const dto = req.body;
	const { id } = req.params;
	const sizeDto = Object.entries(dto).length;
	if (sizeDto > 4) return res.status(400).json({ msg: ERR_SIZEDTO_TYPE });
	if (!id) return res.status(400).json({ msg: REQUIRED_ID });
	if (id && !areStrings[id]) return res.status(400).json({ msg: ERR_ID_TYPE });
	if (dto.title && !areStrings([dto.title]))
		return res.status(400).json({ msg: ERR_TITLE_TYPE });
	if (dto.description && !areStrings([dto.description]))
		return res.status(400).json({ msg: ERR_DESCRIPTION_TYPE });
	if (dto.price && typeof dto.price !== "number")
		return res.status(400).json({ msg: ERR_PRICE_TYPE });
	if (dto.img && areStrings([dto.img]))
		return res.status(400).json({ msg: ERR_IMAGE_TYPE });
	next();
};
