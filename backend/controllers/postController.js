const { User, Post } = require("../database/models.js");

const getUserPostById = async (req, res) => {
	//
	const { userId, postId } = req.params;

	const userFound = await User.findByPk(userId, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No user with the given id" });
	}

	const postFound = await Post.findByPk(postId, {
		include: { all: true, nested: true },
	});

	if (postFound === null) {
		return res.status(404).json({ message: "No post with the given id" });
	}

	return res.json({
		id: postFound.id,
		title: postFound.title,
		body: postFound.body,
	});
};

const getUserPosts = async (req, res) => {
	//
	const { id } = req.params;

	const userFound = await User.findByPk(id, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No record with the given id" });
	}

	const userPosts = [];

	userFound.Posts.forEach((post) => {
		userPosts.push({ id: post.id, title: post.title, body: post.body });
	});

	return res.json(userPosts);
};

const createUserPost = async (req, res) => {
	//

	const { id } = req.params;

	const userFound = await User.findByPk(id, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No record with the given id" });
	}

	const { title, body } = req.body;

	if (!title || !body) {
		return res.status(400).json({
			message: "Mandatory fields must be informed and cannot be empty",
		});
	}

	const newPost = await Post.create({ title, body, ownerId: id });

	return res.status(201).json(newPost);
};

const updateUserPost = async (req, res) => {
	//
	const { userId, postId } = req.params;

	const userFound = await User.findByPk(userId, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No user with the given id" });
	}

	const postFound = await Post.findByPk(postId, {
		include: { all: true, nested: true },
	});

	if (postFound === null) {
		return res.status(404).json({ message: "No post with the given id" });
	}

	const { title, body } = req.body;

	if (!title || !body) {
		return res.status(400).json({
			message: "Mandatory fields must be informed and cannot be empty",
		});
	}

	const updatedPost = await postFound.update({ title, body });
	return res.json({
		id: updatedPost.id,
		title: updatedPost.title,
		body: updatedPost.body,
	});
};

const deleteUserPost = async (req, res) => {
	const { userId, postId } = req.params;

	const userFound = await User.findByPk(userId, {
		include: { all: true, nested: true },
	});

	if (userFound === null) {
		return res.status(404).json({ message: "No user with the given id" });
	}

	const postFound = await Post.findByPk(postId, {
		include: { all: true, nested: true },
	});

	if (postFound === null) {
		return res.status(404).json({ message: "No post with the given id" });
	}

	await postFound.destroy();

	return res.json({ message: "Record successfuly deleted" });
};

module.exports = {
	getUserPostById,
	getUserPosts,
	createUserPost,
	updateUserPost,
	deleteUserPost,
};
