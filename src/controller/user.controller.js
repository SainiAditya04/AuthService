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

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            message: "User sign in successfull",
            success: true,
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            message: "failed to sign in the user",
            success: false,
            err: error
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        // how to know if the incoming request is authenticated or not ?
        // frontend save the JWT token and send the token in Header
        const token = req.header('x-access-token');
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            message: "User is authenticated and token is valid",
            success: true,
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to authenticate",
            success: false,
            err: error
        });
    }
}

const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            message: "successfully verified the admin",
            success: true,
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to identify admin",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin,
}