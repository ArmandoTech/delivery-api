import {
	ERR_SIZE_DTO,
	REQUIRED_EMAIL,
	REQUIRED_PASSWORD
} from "../constants/msgs.js";

export const validateDtoLogin = (req, res, next) => {
	const dto = req.body;
	const sizeDto = Object.entries(dto).length;
	if (sizeDto !== 2) return res.status(400).json({ msg: ERR_SIZE_DTO });
	if (!dto.email) return res.status(400).json({ msg: REQUIRED_EMAIL });
	if (!dto.password) return res.status(400).json({ msg: REQUIRED_PASSWORD });
	next();
};
