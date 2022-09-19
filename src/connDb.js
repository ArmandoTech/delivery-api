import mongoose from "mongoose";
import { MONGODB_URI } from "./env/db.js";

export const connDb = () => mongoose.connect(MONGODB_URI);
