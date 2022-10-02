import { fillCategory } from "./fillCategory.js";
import { fillProduct } from "./fillProduct.js";
import { fillUser } from "./fillUser.js";

export const fillAllDb = async () => {
	await fillCategory();
	await fillProduct();
	await fillUser();
};
