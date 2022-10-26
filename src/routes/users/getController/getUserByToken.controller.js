export const getUserByTokenController = async (req, res, next) => {
	try {
		const { _id, verify, role, username, email, name } = req.user;
		res.status(200).json({ _id, verify, role, username, email, name });
	} catch (error) {
		next(error);
	}
};
