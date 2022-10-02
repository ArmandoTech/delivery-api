export const verifyTokenController = async (req, res, next) => {
	const { username, role, email, name } = req.user;
	try {
		res.status(200).json({ username, email, role, name });
	} catch (error) {
		next(error);
	}
};
