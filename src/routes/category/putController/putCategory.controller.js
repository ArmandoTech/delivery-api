import { updateCategory } from "../../../utils/queries/updateCategory.js";

export const putCategoryController = async (req, res, next) => {
    try {
        console.log(updateCategory());
        res.status(200).json({ msg: "👋" });
    } catch (error) {
        next(error);
    }
};