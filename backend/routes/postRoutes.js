const express = require("express");
const router = express.Router();

// const isAuthenticated = require("../middlewares/isAuthenticated.js");

// const {
// 	userObjectExists,
// 	isSameUserPermission,
// } = require("../middlewares/userPermission.js");

// const postObjectExists = require("../middlewares/postPermission.js");

const postController = require("../controllers/postController.js");

// router.get(
// 	"/users/:id/posts",
// 	isAuthenticated,
// 	userObjectExists,
// 	postObjectExists,
// 	isSameUserPermission,
// 	postController.getUserPosts
// );

// router.post(
// 	"/users/:id/posts",
// 	isAuthenticated,
// 	userObjectExists,
// 	postObjectExists,
// 	isSameUserPermission,
// 	postController.createUserPost
// );

// router.get(
// 	"/users/:userId/posts/:postId",
// 	isAuthenticated,
// 	userObjectExists,
// 	postObjectExists,
// 	isSameUserPermission,
// 	postController.getUserPostById
// );

// router.put(
// 	"/users/:userId/posts/:postId",
// 	isAuthenticated,
// 	userObjectExists,
// 	postObjectExists,
// 	isSameUserPermission,
// 	postController.updateUserPost
// );

// router.delete(
// 	"/users/:userId/posts/:postId",
// 	isAuthenticated,
// 	userObjectExists,
// 	postObjectExists,
// 	isSameUserPermission,
// 	postController.deleteUserPost
// );

router.get("/users/:id/posts", postController.getUserPosts)
router.post("/users/:id/posts", postController.createUserPost)
router.get("/users/:id/posts/:postId", postController.getUserPostById)
router.put("/users/:id/posts/:postId", postController.updateUserPost)
router.delete("/users/:id/posts/:postId", postController.deleteUserPost)

module.exports = router;
