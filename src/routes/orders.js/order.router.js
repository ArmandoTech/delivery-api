import { Router } from "express";
import { validateDtoCreateOrder } from "../../middlewares/validateDtoCreateOrder.js";
import { getAllOrdersController } from "./getController/getAllOrders.controller.js";
import { getOneOrderController } from "./getController/getOneOrder.controller.js";
import { postOrderController } from "./postController/postOrder.controller.js";
import { putOrderController } from "./updateController/putOrder.controller.js";

export const orders = Router();

orders.route("/").post(validateDtoCreateOrder, postOrderController);
orders.route("/:id").put(putOrderController);
orders.route("/").get(getAllOrdersController);
orders.route("/:id").get(getOneOrderController);
orders.route("/").get(getOneOrderController);
