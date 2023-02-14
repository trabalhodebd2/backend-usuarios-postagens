const isAuthenticated = require("../middlewares/isAuthenticated.js");
const userController = require("../controllers/userController.js");

const express = require("express");
const router = express.Router();

router.post("/login", userController.loginUser);
router.get("/logout", isAuthenticated, userController.logoutUser);
router.post("/register", userController.createUser);

module.exports = router;
