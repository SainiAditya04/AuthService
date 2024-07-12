const express = require("express");
const router = express.Router();

// import v1 routes
const v1ApiRoutes = require("./v1/index");

router.use("/v1", v1ApiRoutes);

module.exports = router;