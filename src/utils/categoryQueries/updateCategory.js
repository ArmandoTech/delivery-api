import { CustomError } from "../../classes/CustomError.js";
import { Category } from "../../models/Category.js";
import { stringNormalizer } from "../common/stringNormalizer.js";

export const updateCategory = async (id, { display, img }) => {
	if (!id) throw new CustomError({ status: 400, message: "Id is required" });

	const categoryDocument = await Category.findById(id).exec();

	if (display) {
		categoryDocument.display = display;
		categoryDocument.normalizedDisplay = stringNormalizer(display || "");
	}
	if (img) categoryDocument.img = img;

	return await categoryDocument.save();
};
