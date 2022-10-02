import { fillCategory } from "./fillCategory.js";
import { fillUser } from "./fillUser.js";

export const fillAllDb = async () => {
	await fillCategory();
	return await fillUser();
};
