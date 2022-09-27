import { Router } from "express";
import { deleteCategoryController } from "./deleteController/deleteCategory.controller.js";
import { getCategoriesController } from "./getController/getCategories.controller.js";
import { createCategoryController } from "./postController/createCategory.controller.js";
import { putCategoryController } from "./putController/putCategory.controller.js";

export const categories = Router();

categories.route("/").get(getCategoriesController);
categories.route("/:id").put(putCategoryController);
categories.route("/").post(createCategoryController);
categories.route("/").delete(deleteCategoryController);
