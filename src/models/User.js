import { model, Schema } from "mongoose";
import { ADMIN, CLIENT, MOTORIZED } from "../constants/roles.js";

const UserSchema = new Schema(
	{
		active: { type: Boolean, default: false },
		verify: { type: Boolean, default: false },
		role: { type: String, enum: [CLIENT, ADMIN, MOTORIZED], default: CLIENT },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		img: { type: String },
		name: { type: String },
		phone: { type: Number }
	},
	{ timestamps: true }
);

export const User = model("User", UserSchema);
