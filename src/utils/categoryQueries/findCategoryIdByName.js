import { Category } from "../../models/Category.js";

export const findCategoryIdByName = async categoryNames => {
	const result = [];
	for (let i = 0; i < categoryNames.length; i++) {
		const normalizedDisplay = categoryNames[i];
		const category = await Category.findOne({ normalizedDisplay }).exec();
		result.push(category._id.toString());
	}
	return result;
};
