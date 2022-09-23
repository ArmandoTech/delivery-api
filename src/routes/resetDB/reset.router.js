import { Router } from "express";
import { resetController } from "./resetController/reset.controller.js";


export const reset = Router();

reset.route("/").delete(resetController);
