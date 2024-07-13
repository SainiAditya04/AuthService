const express = require("express");
const router = express.Router();

// import controllers
const UserController = require("../../controller/user.controller");

// import middlewares
const { validateUserAuth } = require("../../middlewares/auth.middleware");

// user routes
router.post("/signup", validateUserAuth, UserController.create);
router.post("/signin", validateUserAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
router.get("/dummy", (req, res) => {
    return res.status(200).json({
        message: "OK"
    });
})

module.exports = router;