import { REQUIRED_ID, WRONG_ID_FORMAT } from "../constants/msgs.js";

export const validateDtoDeleteCategory = (req, res, next) => {
	const { id } = req.params;

	if (!id) return res.status(400).json({ msg: REQUIRED_ID });
	if (id.length !== 24 || typeof id !== "string")
		return res.status(400).json({ msg: WRONG_ID_FORMAT });

	next();
};
