
// this same middleware can be used in both sign up and sign in
const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            message: "All fields are required!",
            success: false,
            err: "All fields are mandatory"
        });
    }

    next();
}

module.exports = {
    validateUserAuth
}

