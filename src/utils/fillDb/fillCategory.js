import { categoriesMockup } from "../../data/categoriesMockup.js";
import { createCategory } from "../categoryQueries/createCategory.js";
import { generateArrayPromises } from "../generateArrayPromises.js";

export const fillCategory = async () => {
    const promiseCreateCategories = generateArrayPromises(categoriesMockup, createCategory);
    const categoriesCreated = await Promise.all(promiseCreateCategories);

    return categoriesCreated;
};
