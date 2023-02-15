const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/isAuthenticated.js");

const {
	userObjectExists,
	isSameUserPermission,
} = require("../middlewares/userPermission.js");

const userController = require("../controllers/userController.js");

router.get(
	"/users/:id",
	isAuthenticated,
	userObjectExists,
	isSameUserPermission,
	userController.getUserById
);

router.put(
	"/users/:id",
	isAuthenticated,
	userObjectExists,
	isSameUserPermission,
	userController.updateUser
);

router.delete(
	"/users/:id",
	isAuthenticated,
	userObjectExists,
	isSameUserPermission,
	userController.deleteUser
);

module.exports = router;
