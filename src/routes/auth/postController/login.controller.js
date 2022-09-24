export const loginController = async (req, res, next) => {
	try {
		res.status(200).json({ msg: "login" });
	} catch (error) {
		next(error);
	}
};
