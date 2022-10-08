import { CustomError } from "../../classes/CustomError.js";
import { ALREADY_EXISTS } from "../../constants/msgs.js";
import { Category } from "../../models/Category.js";
import { stringNormalizer } from "../common/stringNormalizer.js";

export const updateCategory = async (id, { display, img }) => {
	const categoryDocument = await Category.findById(id).exec();

	if (!categoryDocument)
		throw new CustomError({
			status: 400,
			message: "No existe registro con este id"
		});

	if (img) categoryDocument.img = img;
	if (display) {
		categoryDocument.display = display;
		categoryDocument.normalizedDisplay = stringNormalizer(display || "");
		const sameDisplayCount = await Category.countDocuments({
			normalizedDisplay: categoryDocument.normalizedDisplay
		}).exec();

		if (sameDisplayCount > 0)
			throw new CustomError({
				status: 400,
				message: `${ALREADY_EXISTS}: ${categoryDocument.display}`
			});
	}

	categoryDocument.save();
};
