const express = require('express');
const app = express();
const apiRoutes = require("./routes/index");
require("dotenv").config();

const { User, Role } = require("./models/index");

const db = require("./models/index");

const PORT = process.env.PORT;

const startServer = async () => {

    app.use(express.json());
    app.use("/api", apiRoutes);

    // if(process.env.DB_SYNC){
    //     db.sequelize.sync({ alter: true });
    // } 

    // const u1 = await User.findByPk(4);
    // const r1 = await Role.findByPk(1);
    // u1.addRole(r1);

    app.listen(PORT, async (req, res) => {
        console.log(`The server is started at PORT: ${PORT}`);
    });
}

startServer(); 