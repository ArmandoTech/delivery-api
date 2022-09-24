import { CategoryModel } from "../../models/Category.js";
import { nameFlatter } from "../nameFlatter.js";


export const createCategory = (categoryName) => {

    const newCategory = new CategoryModel({ categoryName: nameFlatter(categoryName), display: categoryName });
    const result = { status: "success", message: `Category '${categoryName}' Successfully created.` };

    newCategory
        .save()
        .then()
        .catch((err) => {
            throw err;
        });

    return result;
}