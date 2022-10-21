import { Router } from "express";
import { validateDtoCreateOrder } from "../../middlewares/validateDtoCreateOrder.js";
import { validateDtoUpdateOrder } from "../../middlewares/validateDtoUpdateOrder.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { getAllOrdersController } from "./getController/getAllOrders.controller.js";
import { getOneOrderController } from "./getController/getOneOrder.controller.js";
import { postOrderController } from "./postController/postOrder.controller.js";
import { putOrderController } from "./updateController/putOrder.controller.js";

export const orders = Router();

orders
	.route("/")
	.post(validateToken, validateDtoCreateOrder, postOrderController);
orders
	.route("/:id")
	.put(validateToken, validateDtoUpdateOrder, putOrderController);
orders.route("/").get(validateToken, getAllOrdersController);
orders.route("/:id").get(validateToken, getOneOrderController);
