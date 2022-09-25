export const areStrings = param => {
	if (!param || !Array.isArray(param)) throw TypeError("Required param array");
	const result = param.some(item => typeof item !== "string");
	return !result;
};
