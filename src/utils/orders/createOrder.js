import { CustomError } from "../../classes/CustomError.js";
import mongoose from "mongoose";
import { Order } from "../../models/Order.js";
import { Detail } from "../../models/OrderDetail.js";
import { ORDERED_ORDER } from "../../constants/orderStatus.js";
import { Product } from "../../models/Product.js";

export const createOrder = async (body, user) => {
	const { address, state, latitude, longitude, details } = body;

	const date = Date.now;

	await Order.createCollection();
	const session = await mongoose.startSession();
	const productIds = details.map(el => el.product);
	const productAmount = details.reduce((acc, el, ix, arr) => {
		acc[el.product] = el.amount;
		return acc;
	}, {});

	const productList = (
		await Product.find({ _id: { $in: productIds } })
			.select("_id name price")
			.exec()
	).map(el => {
		const { _id: product, name, price } = el._doc;
		const newEl = {
			product,
			name,
			price,
			amount: productAmount[el._id.toString()]
		};
		return newEl;
	});

	const sessionResult = await session.withTransaction(async () => {
		const detailsDocuments = await Detail.create(productList, { session });

		const detailsList = detailsDocuments.map(el => el._id);

		await Order.create(
			[
				{
					status: ORDERED_ORDER,
					latitude,
					longitude,
					user: user._id,
					createdAt: { type: Date, default: date },
					updatedAt: { type: Date, default: date },
					address,
					state,
					details: detailsList
				}
			],
			{ session }
		);
	});

	if (sessionResult) session.endSession();
	else
		throw new CustomError({
			status: 400,
			msg: "Algo ha salido mal al crear el pedido"
		});
};
