const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/isAuthenticated.js");

const {
    userObjectExists,
    isSameUserPermission,
} = require("../middlewares/userPermission.js");

const userController = require("../controllers/userController.js");

router
    .route("/users/:id")
    .get(
        isAuthenticated,
        userObjectExists,
        isSameUserPermission,
        userController.getUserById
    )
    .put(
        isAuthenticated,
        userObjectExists,
        isSameUserPermission,
        userController.updateUser
    )
    .delete(
        isAuthenticated,
        userObjectExists,
        isSameUserPermission,
        userController.deleteUser
    );

module.exports = router;
