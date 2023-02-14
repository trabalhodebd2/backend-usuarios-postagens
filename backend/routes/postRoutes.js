const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/isAuthenticated.js");
const postController = require("../controllers/postController.js");

router.get("/users/:id/posts", isAuthenticated, postController.getUserPosts);

router.post("/users/:id/posts", isAuthenticated, postController.createUserPost);

router.get(
	"/users/:userId/posts/:postId",
	isAuthenticated,
	postController.getUserPostById
);

router.put(
	"/users/:userId/posts/:postId",
	isAuthenticated,
	postController.updateUserPost
);

router.delete(
	"/users/:userId/posts/:postId",
	isAuthenticated,
	postController.deleteUserPost
);

module.exports = router;
