const express = require("express");
const router = express.Router();

// import controllers
const UserController = require("../../controller/user.controller");

// import middlewares
const { validateUserAuth, validateIsAdmin } = require("../../middlewares/auth.middleware");

// user routes
router.post("/signup", validateUserAuth, UserController.create);
router.post("/signin", validateUserAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
router.get("/isAdmin", validateIsAdmin, UserController.isAdmin);

module.exports = router;