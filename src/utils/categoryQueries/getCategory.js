import { CategoryModel } from "../../models/Category.js";
import { nameFlatter } from "../nameFlatter.js";

export const getCategory = (categoryName) => {
    const regex = new RegExp(nameFlatter(categoryName));
    return CategoryModel.findOne({ categoryName: regex }).exec();
}