const { User } = require("../database/models.js");

const getUserById = async (req, res) => {
	//
	const { id } = req.params;

	const userFound = await User.findByPk(id, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No record with the given id" });
	}

	const mappedUser = {
		id: userFound.id,
		username: userFound.username,
		email: userFound.email,
	};

	return res.json(mappedUser);
};

const createUser = async (req, res) => {
	//
	const { username, email } = req.body;

	if (!username || !email) {
		return res.status(400).json({
			message: "Mandatory fields must be informed and cannot be empty",
		});
	}

	const [newUser, created] = await User.findOrCreate({
		where: { email: email },
		defaults: {
			username,
			email,
		},
	});

	if (created) {
		return res.status(201).json(newUser);
	}
	return res
		.status(400)
		.json({ message: "Record with given email already exists." });
};

const updateUser = async (req, res) => {
	//
	const { id } = req.params;

	const userFound = await User.findByPk(id, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No record with the given id" });
	}

	const { username, email } = req.body;

	if (!username || !email) {
		return res.status(400).json({
			message: "Mandatory fields must be informed and cannot be empty",
		});
	}

	const updatedUser = await userFound.update({ username, email });
	return res.json(updatedUser);
};

const deleteUser = async (req, res) => {
	const { id } = req.params;

	const userFound = await User.findByPk(id, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No record with the given id" });
	}

	await userFound.destroy();

	return res.json({ message: "Record successfuly deleted" });
};

module.exports = {
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
