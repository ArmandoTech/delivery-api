import { fillCategory } from "./fillCategory.js";
import { fillUser } from "./fillUser.js";

export const fillAllDb = async () => {
	const categoriesIds = (await fillCategory()).reduce((acc, category) => {
		const newValue = category[0]._id.toString();
		if (acc.indexOf(newValue) === -1)
			acc.push(newValue)
		return acc;
	}, []);
	console.log(categoriesIds);

	// await fillProduct(categoriesIds);
	return await fillUser();
};
