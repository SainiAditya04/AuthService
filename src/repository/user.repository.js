const { User } = require("../models/index")

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

}

module.exports = UserRepository;