import {
	ADDRESS_REQUIRED,
	ERR_SIZEDTO_TYPE,
	UNVALID_UPDATE_PETITION,
	WRONG_CORDINATES,
	WRONG_ID_FORMAT,
	WRONG_ORDER_STATUS
} from "../constants/msgs.js";
import { orderStatus } from "../constants/orderStatus.js";

export const validateDtoCreateOrder = async (rec, res, next) => {
	const { id } = rec.params;
	const dto = rec.body;
	const { update } = dto;

	if (typeof id !== "string" || id.length !== 24)
		return res.status(400).json({ msg: WRONG_ID_FORMAT });
	if (!(update in validationFunctions))
		return res.status(400).json({ msg: UNVALID_UPDATE_PETITION });

	const validationResult = validationFunctions(update);

	if (validationResult !== "")
		return res.status(400).json({ msg: validationResult });
	next();
};

const validationFunctions = {
	address: validateAddressDTO,
	status: validateStatusDTO
};

function validateAddressDTO(dto) {
	const { address, state, latitude, longitude } = dto;
	// update property is part of this validation
	if (Object.keys(dto).length !== 5) return ERR_SIZEDTO_TYPE;
	if (!address || !state) return ADDRESS_REQUIRED;
	if (typeof address !== "string" || typeof state !== "string")
		return ADDRESS_REQUIRED;
	if (typeof latitude !== "number" || typeof longitude !== "number")
		return WRONG_CORDINATES;

	return "";
}

function validateStatusDTO(dto) {
	const { status } = dto;
	// update property is part of this validation
	if (Object.keys(dto).length !== 2) return ERR_SIZEDTO_TYPE;
	if (orderStatus.indexOf(status) === -1) return WRONG_ORDER_STATUS;

	return "";
}
