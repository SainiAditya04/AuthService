const { User, Role } = require("../models/index")

class UserRepository{

    async create(data){
        try{
            const user = await User.create(data);
            return user;
        }
        catch(error){
            console.log("Error in user repository");
            throw error;
        }
    }

    async destroy(userId){
        try{
            await User.destroy({
                where: {
                    id: userId 
                }
            });

            return true;
        }
        catch(error){
            console.log("Error in user repository");
            throw error;
        }
    }

    async getById(userId){
        try{
            // if we get the user by following way, we will get
            // the hashed password as well, we don't want it
            // const user = await User.findByPk(userId);

            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        }
        catch(error){
            console.log("Error in the user repository");
            throw error;
        }
    }

    async getByEmail(userEmail){
        try {
            const user = await User.findOne({
                where: {
                    email: userEmail
                }
            });

            if(!user){
                throw { err: "User doesn't exits"};
            }
            return user;
        } catch (error) {
            console.log("something went wrong in user repository");
            throw error;
        }
    }

    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            });

            return user.hasRole(adminRole);
        } catch (error) {
            console.log("something went wrong in user repository: admin role!");
            throw error;
        }
    }
}

module.exports = UserRepository;