import { Router } from "express";
import { validateDtoGetOneProduct } from "../../middlewares/validateDtoGetOneProduct.js";
import { validateDtoGetProducts } from "../../middlewares/validateDtoGetProducts.js";
import { deleteProductController } from "./deleteController/deleteProduct.controller.js";
import { getAllProductsController } from "./getController/getAllProducts.controller.js";
import { getOneProductController } from "./getController/getOneProduct.controller.js";
import { createProductController } from "./postController/createProduct.controller.js";
import { updateProductController } from "./updateController/updateProduct.controller.js";

export const products = Router();

products.route("/").get(validateDtoGetProducts, getAllProductsController);
products.route("/:id").get(validateDtoGetOneProduct, getOneProductController);
products.route("/").post(createProductController);
products.route("/:id").delete(deleteProductController);
products.route("/:id").patch(updateProductController);
