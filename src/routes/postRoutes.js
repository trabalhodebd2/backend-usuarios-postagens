const express = require("express");
const router = express.Router();

const isAuthenticated = require("../../middlewares/isAuthenticated.js");

const {
    userObjectExists,
    isSameUserPermission,
} = require("../../middlewares/userPermission.js");

const postObjectExists = require("../../middlewares/postPermission.js");

const postController = require("../../controllers/postController.js");

router
    .route("/users/:id/posts")
    .get(
        isAuthenticated,
        userObjectExists,
        postObjectExists,
        isSameUserPermission,
        postController.getUserPosts
    )
    .post(
        isAuthenticated,
        userObjectExists,
        postObjectExists,
        isSameUserPermission,
        postController.createUserPost
    );

router.get("/users/:id/posts", postController.getUserPosts);
router.post("/users/:id/posts", postController.createUserPost);

router
    .route("/users/:userId/posts/:postId")
    .get(
        isAuthenticated,
        userObjectExists,
        postObjectExists,
        isSameUserPermission,
        postController.getUserPostById
    )
    .put(
        isAuthenticated,
        userObjectExists,
        postObjectExists,
        isSameUserPermission,
        postController.updateUserPost
    )
    .delete(
        isAuthenticated,
        userObjectExists,
        postObjectExists,
        isSameUserPermission,
        postController.deleteUserPost
    );

module.exports = router;
