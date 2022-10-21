import {
	ADDRESS_REQUIRED,
	ERR_SIZEDTO_TYPE,
	WRONG_CORDINATES
} from "../constants/msgs.js";

export const validateDtoCreateOrder = async (req, res, next) => {
	const dto = req.body;
	const { details, address, state, latitude, longitude } = req.body;
	if (Object.keys(dto).length !== 5)
		return res.status(400).json({ msg: ERR_SIZEDTO_TYPE });
	if (details.length === 0)
		return res.status(400).json({ msg: "No hay productos en el pedido." });

	if (!address || typeof address !== "string")
		return res.status(400).json({
			msg: ADDRESS_REQUIRED
		});

	if (!state || typeof state !== "string")
		return res.status(400).json({
			msg: ADDRESS_REQUIRED
		});
	if (typeof latitude !== "number" || typeof longitude !== "number")
		return res.status(400).json({
			msg: WRONG_CORDINATES
		});
	next();
};
