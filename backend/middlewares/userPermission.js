const { User } = require("../database/models.js");

const userObjectExists = async (req, res, next) => {
	//
	const hasUserIdKey = req.params.userId;
	const hasIdKey = req.params.id;

	const userId = hasUserIdKey
		? hasUserIdKey
		: hasIdKey
		? hasIdKey
		: undefined;

	const userFound = await User.findByPk(userId, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No user with the given id" });
	}
	next();
};

const isSameUserPermission = async (req, res, next) => {
	//
	const hasUserIdKey = req.params.userId;
	const hasIdKey = req.params.id;

	const userId = hasUserIdKey
		? hasUserIdKey
		: hasIdKey
		? hasIdKey
		: undefined;

	const loggedUserId = req.session.userId;

	const userFound = await User.findByPk(userId, {
		include: { all: true, nested: true },
	});

	if (userFound.id !== loggedUserId) {
		return res.status(404).json({
			message: "You dont have permission to perform this action!",
		});
	}
	next();
};

module.exports = { userObjectExists, isSameUserPermission };
