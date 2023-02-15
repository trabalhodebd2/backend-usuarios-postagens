const bcrypt = require("bcrypt");

const { User } = require("../database/models.js");

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne(
		{ where: { email: email } },
		{
			include: { all: true, nested: true },
		}
	);

	const match = user
		? await bcrypt.compare(password, user.password)
		: undefined;

	if (user && match) {
		req.session.userId = user.id;
		req.session.flash = {};
		res.json({ message: "User authenticated with success." });
	} else {
		req.session.flash = { error: "Email or password not valid." };
		res.status(400).json({ message: "Email or password not valid." });
	}
};

const logoutUser = (req, res) => {
	req.session.destroy();
	res.json({ message: "Logged out with success." });
};

const getUserById = async (req, res) => {
	//
	const { id } = req.params;

	const userFound = await User.findByPk(id, {
		include: { all: true, nested: true },
	});

	const mappedUser = {
		id: userFound.id,
		username: userFound.username,
		email: userFound.email,
	};

	return res.json(mappedUser);
};

const createUser = async (req, res) => {
	//
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		return res.status(400).json({
			message: "Mandatory fields must be informed and cannot be empty",
		});
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const [newUser, created] = await User.findOrCreate({
		where: { email: email },
		defaults: {
			username,
			email,
			password: hashedPassword,
		},
	});

	if (created) {
		//
		const mappedUser = {
			id: newUser.id,
			username: newUser.username,
			email: newUser.email,
		};

		return res.status(201).json(mappedUser);
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

	const { username, email } = req.body;

	if (!username || !email) {
		return res.status(400).json({
			message: "Mandatory fields must be informed and cannot be empty",
		});
	}

	const userWithEmail = await User.findOne(
		{ where: { email: email } },
		{
			include: { all: true, nested: true },
		}
	);

	if (userWithEmail !== null && userWithEmail.email !== userFound.email) {
		// senao levanta erro mesmo que o usuario que ja exista for ele mesmo
		return res
			.status(404)
			.json({ message: "User with this email already exists." });
	}

	const updatedUser = await userFound.update({ username, email });

	const mappedUser = {
		id: updatedUser.id,
		username: updatedUser.username,
		email: updatedUser.email,
	};

	return res.json(mappedUser);
};

const deleteUser = async (req, res) => {
	const { id } = req.params;

	const userFound = await User.findByPk(id, {
		include: { all: true, nested: true },
	});

	await userFound.destroy();

	return res.json({ message: "Record successfuly deleted" });
};

module.exports = {
	loginUser,
	logoutUser,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
