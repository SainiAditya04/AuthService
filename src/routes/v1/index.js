const express = require("express");
const router = express.Router();

// import controllers
const UserController = require("../../controller/user.controller");

// user routes
router.post("/signup", UserController.create);
router.post("/signin", UserController.signIn);

module.exports = router;