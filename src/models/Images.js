import { model, Schema } from "mongoose";

const ImageSchema = new Schema({
	img: { type: String, required: true },
	products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

export const Product = model("Image", ImageSchema);
