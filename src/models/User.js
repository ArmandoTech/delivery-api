import { model, Schema } from "mongoose";
import { ADMIN, CLIENT, MOTORIZED } from "../constants/roles.js";

const UserSchema = new Schema(
	{
		deleted: { type: Boolean, default: false },
		verify: { type: Boolean, default: false },
		role: { type: String, enum: [CLIENT, ADMIN, MOTORIZED], default: CLIENT },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		img: { type: String },
		name: { type: String },
		surname: { type: String },
		phone: { type: Number }
	},
	{ timestamps: true },
	{
		toObject: {
			transform: function (_, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
			}
		}
	}
);

export const User = model("User", UserSchema);
