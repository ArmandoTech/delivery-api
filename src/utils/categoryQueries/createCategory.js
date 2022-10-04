import { CustomError } from "../../classes/CustomError.js";
import { ALREADY_EXISTS } from "../../constants/msgs.js";
import { Category } from "../../models/Category.js";
import { findOrCreate } from "../common/findOrCreate.js";
import { stringNormalizer } from "../common/stringNormalizer.js";

export const createCategory = async ({ display, img = "" }) => {
	if (!display)
		throw new CustomError({
			message: "Display value is required.",
			status: 400
		});

	const [category, created] = await findOrCreate(
		Category,
		{ normalizedDisplay: stringNormalizer(display) },
		{ display, img }
	);

	if (created) await category.save();
	else
		throw new CustomError({
			status: 400,
			message: `${ALREADY_EXISTS}: '${display}'.`
		});

	return category;
};
