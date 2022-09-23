export const registerController = async (req, res, next) => {
	try {
		res.status(200).json({ msg: "👋" });
	} catch (error) {
		next(error);
	}
};
