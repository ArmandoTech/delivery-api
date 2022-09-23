import { Router } from "express";
import { deleteUserController } from "./deleteController/deleteUser.controller.js";
import { getAllUsersController } from "./getController/getAllUsers.controller.js";

export const users = Router();

users.route("/").get(getAllUsersController);
users.route("/:id").delete(deleteUserController);
