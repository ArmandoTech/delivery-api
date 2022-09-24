import {
	ERR_SIZE_DTO,
	REQUIRED_EMAIL,
	REQUIRED_PASSWORD,
	REQUIRED_USERNAME
} from "../constants/msgs.js";

export const validateDtoRegister = (req, res, next) => {
	const dto = req.body;
	const sizeDto = Object.entries(dto).length;
	if (sizeDto !== 3) return res.status(400).json({ msg: ERR_SIZE_DTO });
	if (!dto.username) return res.status(400).json({ msg: REQUIRED_USERNAME });
	if (!dto.email) return res.status(400).json({ msg: REQUIRED_EMAIL });
	if (!dto.password) return res.status(400).json({ msg: REQUIRED_PASSWORD });
	next();
};
