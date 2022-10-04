import {
	ERR_SIZE_DTO,
	REQUIRED_EMAIL,
	REQUIRED_NAME,
	REQUIRED_PASSWORD,
	REQUIRED_USERNAME,
	TYPE_DTO_ERR
} from "../constants/msgs.js";
import { areStrings } from "../utils/common/areStrings.js";

export const validateDtoRegister = (req, res, next) => {
	const dto = req.body;
	const sizeDto = Object.entries(dto).length;
	if (sizeDto !== 4) return res.status(400).json({ msg: ERR_SIZE_DTO });
	if (!areStrings([dto.username, dto.email, dto.password, dto.name]))
		return res.status(400).json({ msg: TYPE_DTO_ERR });
	if (!dto.username) return res.status(400).json({ msg: REQUIRED_USERNAME });
	if (!dto.email) return res.status(400).json({ msg: REQUIRED_EMAIL });
	if (!dto.password) return res.status(400).json({ msg: REQUIRED_PASSWORD });
	if (!dto.name) return res.status(400).json({ msg: REQUIRED_NAME });
	next();
};
