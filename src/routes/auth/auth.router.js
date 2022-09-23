import { Router } from "express";
import { registerController } from "./postController/register.controller.js";

export const auth = Router();

auth.route("/register").post(registerController);
