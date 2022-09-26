import { model, Schema } from "mongoose";

const Category = new Schema({
	categoryName: {
		type: String,
		require: true
	},
	display: {
		type: String,
		require: true
	}
});

Category.set("versionKey", false);
Category.set("toJSON", {
	transform: function (_, ret) {
		ret.id = ret._id;
		ret.name = ret.display;
		delete ret._id;
		delete ret.display;
		delete ret.categoryName;
	}
});

export const CategoryModel = model("Category", Category);
