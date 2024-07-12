require("dotenv").config();
const bcrypt = require("bcrypt");

module.exports = {
    SALT: bcrypt.genSaltSync(10),
    JWT_KEY: process.env.JWT_KEY,
}