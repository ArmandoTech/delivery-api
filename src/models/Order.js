import { model, Schema } from "mongoose";

const OrderSchema = new Schema({
	address: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	status: { type: String, required: true },
	latitude: { type: Number },
	longitude: { type: Number },
	user: { type: Schema.Types.ObjectId, ref: "User" },
	details: [{ type: Schema.Types.ObjectId, ref: "Details" }]
});

OrderSchema.set("versionKey", false);

export const Order = model("Order", OrderSchema);
