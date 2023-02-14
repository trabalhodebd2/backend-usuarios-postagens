const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/isAuthenticated.js");
const userController = require("../controllers/userController.js");

router.get("/users/:id", isAuthenticated, userController.getUserById);
router.put("/users/:id", isAuthenticated, userController.updateUser);
router.delete("/users/:id", isAuthenticated, userController.deleteUser);

module.exports = router;
