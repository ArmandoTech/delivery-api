import { CategoryModel } from "../../models/Category.js";
import { stringNormalizer } from "../stringNormalizer.js";

export const updateCategory = async (id, { display, img }) => {
	if (!id) throw TypeError("Id is required");

	const categoryDocument = await CategoryModel.findById(id).exec();

	if (display) {
		categoryDocument.display = display;
		categoryDocument.normalizedDisplay = stringNormalizer(display || "");
	}
	if (img) categoryDocument.img = img;

	return await categoryDocument.save();
};
