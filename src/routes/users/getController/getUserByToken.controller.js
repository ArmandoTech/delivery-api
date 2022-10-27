export const getUserByTokenController = async (req, res, next) => {
	try {
		const { _id, verify, role, username, email, name, img } = req.user;
		res.status(200).json({ _id, verify, role, username, email, name, img });
	} catch (error) {
		next(error);
	}
};
