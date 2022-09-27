import { CategoryModel } from "../../models/Category.js";
import { findOrCreate } from "../findOrCreate.js";
import { stringNormalizer } from "../stringNormalizer.js";

export const createCategory = async (display, img) => {
	return await findOrCreate(
		CategoryModel,
		{
			normalizedDisplay: stringNormalizer(display),
			display,
			img
		}
	)
};
