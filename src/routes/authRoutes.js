const express = require("express");
const router = express.Router();

const isAuthenticated = require("../../middlewares/isAuthenticated.js");
const userController = require("../../controllers/userController.js");

router.post("/login", userController.loginUser);
router.get("/logout", isAuthenticated, userController.logoutUser);
router.post("/register", userController.createUser);
router.get("/me", isAuthenticated, async (req, res) => {
    const loggedUserId = req.session.userId;
    return res.json(loggedUserId);
});

module.exports = router;
