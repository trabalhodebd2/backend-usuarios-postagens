const { User, Post } = require("../database/models.js");

const getUserPostById = async (req, res) => {
	
	const { postId } = req.params;

	const postFound = await Post.findByPk(postId, {
		include: { all: true, nested: true },
	});

	return res.json({
		id: postFound.id,
		title: postFound.title,
		body: postFound.body,
	});
};

const getUserPosts = async (req, res) => {
	
	const userFound = await User.findByPk(req.params.id, {
		include: { all: true, nested: true },
	});

	const userPosts = [];

	userFound.Posts.forEach((post) => {
		userPosts.push({ id: post.id, title: post.title, body: post.body });
	});

	return res.json(userPosts);
};

const createUserPost = async (req, res) => {

	const { id } = req.params;

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
	
	const { postId } = req.params;

	const postFound = await Post.findByPk(postId, {
		include: { all: true, nested: true },
	});

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
	const { postId } = req.params;

	const postFound = await Post.findByPk(postId, {
		include: { all: true, nested: true },
	});

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
