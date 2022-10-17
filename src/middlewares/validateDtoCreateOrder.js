import {
	ADDRESS_REQUIRED,
	ERR_SIZEDTO_TYPE,
	WRONG_CORDINATES,
	WRONG_ID_FORMAT
} from "../constants/msgs.js";

export const validateDtoCreateOrder = async (rec, res, next) => {
	const dto = rec.body;
	const { details, user, address, state, latitude, longitude } = rec.body;
	if (Object.keys(dto).length !== 6)
		return res.status(400).json({ msg: ERR_SIZEDTO_TYPE });
	if (details.length === 0)
		return res.status(400).json({ msg: "No hay productos en el pedido." });
	if (user.length !== 24 || typeof user !== "string")
		return res.status(400).json({ msg: WRONG_ID_FORMAT });

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
