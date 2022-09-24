import { deleteCategory } from "../../../utils/queries/deleteCategory.js";

export const deleteCategoryController = async (req, res, next) => {
    try {
        console.log(deleteCategory);
        res.status(200).json({ msg: "👋" });
    } catch (error) {
        next(error);
    }
};