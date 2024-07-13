const UserRepository = require("../repository/user.repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        }
        catch (error) {
            console.log("something went wrong in user service");
            throw error;
        }
    }

    async signIn(email, plainPassword){
        try {
            // step 1: fetch the user using email
            const user = await this.userRepository.getByEmail(email);
            // step 2: compare the plain password with encrypted password
            const passwordsMatch = this.checkPassword(plainPassword, user.password);

            if(!passwordsMatch) {
                console.log("Please enter correct password");
                throw {Error: "Password doesn't match!"};
            }

            // if passwords matched, create token and send it to user

            const token = this.createToken({
                email: user.email,
                id: user.id,
            });

            return token;

        } catch (error) {
            console.log("something went wrong while sign in.");
            throw error;
        }
    }

    async isAuthenticated(token){
        try {
            const response = this.verifyToken(token);
            if(!response){
                throw {error: "Invalid token"};
            }

            const user = await this.userRepository.getById(response.id);
            if(!user){
                throw {error: "no user with corresponding token exists"};
            }

            return user.id;

        } catch (error) {
            console.log("Something went wrong in the auth service");
            throw {error};
        }
    }

    createToken(user) {
        try {
            const token = jwt.sign(user, JWT_KEY, { expiresIn: '1d' });
            return token;
        }
        catch (error) {
            console.log("something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try{
            const response = jwt.verify(token, JWT_KEY);
            return response;
        }
        catch(error){
            console.log("something went wrong while verifying token", error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword){
        try{
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        }
        catch(error){
            console.log("something went wrong while checking password in user service");
            throw error;
        }
    }
};


module.exports = UserService;