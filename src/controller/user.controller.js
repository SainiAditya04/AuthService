const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
    try{
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });

        return res.status(201).json({
            message: "User created successfully",
            success: true,
            data: response,
        });
    }
    catch(error){
        return res.status(500).json({
            message: "Failed to create the user",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
}