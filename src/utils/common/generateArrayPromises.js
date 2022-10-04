export const generateArrayPromises = (array, promise) => {
	return array.map(item => promise(item));
};
