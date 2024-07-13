const express = require("express");
const router = express.Router();

// import controllers
const UserController = require("../../controller/user.controller");

// import middlewares
const { validateUserAuth } = require("../../middlewares/auth.middleware");

// user routes
router.post("/signup", validateUserAuth, UserController.create);
router.post("/signin", validateUserAuth, UserController.signIn);

module.exports = router;