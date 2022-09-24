import { CategoriesModel } from "../../models/Category.js";

export const updateCategory = (categoryName, ...props) => {
	const newValues = props.reduce((acc, el, ix, arr) => {
		if (ix % 2 === 0) acc[el] = arr[ix + 1];
		return acc;
	}, {});
	return CategoriesModel.updateOne({ name: categoryName }, newValues).exec();
};
