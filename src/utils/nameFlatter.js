export const nameFlatter = name => {
	return name
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/ /g, "_")
		.toUpperCase();
};
