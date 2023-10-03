const { User, Post } = require("../database/models.js");

const postObjectExists = async (req, res, next) => {
	//
	const hasUserIdKey = req.params.postId;
	const hasIdKey = req.params.id;

	const postId = hasUserIdKey
		? hasUserIdKey
		: hasIdKey
		? hasIdKey
		: undefined;

	const postFound = await Post.findByPk(postId, {
		include: { all: true, nested: true },
	});

	if (postFound === null) {
		return res.status(404).json({ message: "No post with the given id" });
	}
	next();
};

module.exports = postObjectExists;
