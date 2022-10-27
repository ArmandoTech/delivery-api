import { Router } from "express";
import { validateDtoUpdatCategory } from "../../middlewares/validateDtoUpdateCategory.js";
import { deleteCategoryController } from "./deleteController/deleteCategory.controller.js";
import { getCategoriesController } from "./getController/getCategories.controller.js";
import { getOneCategoryController } from "./getController/getOneCategory.controller.js";
import { createCategoryController } from "./postController/createCategory.controller.js";
import { putCategoryController } from "./putController/putCategory.controller.js";

export const categories = Router();

categories.route("/").get(getCategoriesController);
categories.route("/:id").get(getOneCategoryController);
categories.route("/:id").put(validateDtoUpdatCategory, putCategoryController);
categories.route("/").post(createCategoryController);
categories.route("/:id").delete(deleteCategoryController);
