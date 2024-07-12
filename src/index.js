const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

const startServer = () => {
    app.listen(PORT, (req, res) => {
        console.log(`The server is started at PORT: ${PORT}`);
    });
}

startServer(); 