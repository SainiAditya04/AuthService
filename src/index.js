const express = require('express');
const app = express();
require("dotenv").config();

const apiRoutes = require("./routes/index");

const PORT = process.env.PORT;

const startServer = () => {

    app.use(express.json());
    app.use("/api", apiRoutes);

    app.listen(PORT, async (req, res) => {
        console.log(`The server is started at PORT: ${PORT}`);
    });
}

startServer(); 