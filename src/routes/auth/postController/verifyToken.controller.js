export const verifyTokenController = async (req, res, next) => {
	const { username, role, email } = req.user;
	try {
		res.status(200).json({ username, email, role });
	} catch (error) {
		next(error);
	}
};
