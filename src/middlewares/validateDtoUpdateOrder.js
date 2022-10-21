import {
	ADDRESS_REQUIRED,
	ADMIN_ROLE_NEEDED,
	ERR_SIZEDTO_TYPE,
	INVALID_USER,
	UNVALID_UPDATE_PETITION,
	WRONG_CORDINATES,
	WRONG_ID_FORMAT,
	WRONG_ORDER_STATUS
} from "../constants/msgs.js";
import { CANCELED_ORDER, orderStatus } from "../constants/orderStatus.js";
import { ADMIN } from "../constants/roles.js";

export const validateDtoUpdateOrder = async (req, res, next) => {
	const { user } = req;
	const { id } = req.params;
	const dto = req.body;
	const { update } = dto;

	if (typeof id !== "string" || id.length !== 24)
		return res.status(400).json({ msg: WRONG_ID_FORMAT });
	if (!(update in validationFunctions))
		return res.status(400).json({ msg: UNVALID_UPDATE_PETITION });

	const validationResult = validationFunctions[update](dto, user);

	if (validationResult !== "")
		return res.status(400).json({ msg: validationResult });
	next();
};

const validationFunctions = {
	address: validateAddressDTO,
	status: validateStatusDTO
};

function validateAddressDTO(dto, user) {
	const { address, state, latitude, longitude } = dto;
	// update property is part of this validation
	if (Object.keys(dto).length !== 5) return ERR_SIZEDTO_TYPE;
	if (!address || !state) return ADDRESS_REQUIRED;
	if (typeof address !== "string" || typeof state !== "string")
		return ADDRESS_REQUIRED;
	if (typeof latitude !== "number" || typeof longitude !== "number")
		return WRONG_CORDINATES;
	if (user.role === ADMIN) return INVALID_USER;

	return "";
}

function validateStatusDTO(dto, user) {
	const { status } = dto;
	// update property is part of this validation
	if (Object.keys(dto).length !== 2) return ERR_SIZEDTO_TYPE;
	if (orderStatus.indexOf(status) === -1) return WRONG_ORDER_STATUS;
	if (status !== CANCELED_ORDER && user.role !== ADMIN)
		return ADMIN_ROLE_NEEDED;

	return "";
}
