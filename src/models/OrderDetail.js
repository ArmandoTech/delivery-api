import { model, Schema } from "mongoose";

const DetailSchema = new Schema({
	product: { type: Schema.Types.ObjectId, ref: "Product" },
	amount: { type: Number },
	name: { type: String },
	price: { type: Number },
	orderId: { type: Schema.Types.ObjectId, ref: "Order" }
});

DetailSchema.set("versionKey", false);

export const Detail = model("Detail", DetailSchema);
