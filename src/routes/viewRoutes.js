const express = require("express");
const router = express.Router();

const { privateRouter, publicRouter } = require("../middlewares/viewHandleRoutes.js");

router.get("/", privateRouter, (req, res) => res.render("index.njk"));
router.get("/login", publicRouter, (req, res) => res.render("login.njk"));
router.get("/cadastro", publicRouter, (req, res) => res.render("cadastro.njk"));

module.exports = router;
