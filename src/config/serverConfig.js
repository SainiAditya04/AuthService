require("dotenv").config();
const bcrypt = require("bcrypt");

module.exports = {
    SALT: bcrypt.genSaltSync(10)
}