import {
	NO_VALUES_FOR_UPDATE,
	REQUIRED_ID,
	WRONG_ID_FORMAT
} from "../constants/msgs.js";

export const validateDtoUpdatCategory = (req, res, next) => {
	const { id } = req.params;
	const dto = req.body;

	if (Object.keys(dto).length === 0)
		return res.status(400).json({ msg: NO_VALUES_FOR_UPDATE });
	if (!id) return res.status(400).json({ msg: REQUIRED_ID });
	if (id.length !== 24 || typeof id !== "string")
		return res.status(400).json({ msg: WRONG_ID_FORMAT });

	next();
};
