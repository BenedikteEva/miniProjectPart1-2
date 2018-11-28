import { User } from '../User';
const userFacade = require('../../facades/userFacade');

const resolvers = {
    Query: {
        getUserById: async (root,{ ID }) => {
            return await userFacade.findById(ID);
        },
        getUserByName:async (root,{ input }) => {
            return await User.findOne({
                userName: input.userName
            });
        },
        getUsers: () => {
            return User.find({});
        }
    },
    Mutation: {
        createUser: (root, { input }) => {
            const newUser = new User({
                userName: input.userName,
                firstName: input.firstName,
                lastName: input.lastName,
                password: input.password,
                email: input.email,
                job: {
                    type: input.type,
                    company: input.company,
                    companyUrl: input.companyUrl
                }
            });

            userFacade.addUser(newUser.firstName, newUser.lastName, newUser.userName, newUser.password, newUser.email, newUser.type, newUser.company, newUser.companyUrl);
            return ("User succesfully added");
        },
        updateUser: (root, { input }) => {
            const newUser = new User({
                userName: input.userName,
                firstName: input.firstName,
                lastName: input.lastName,
                password: input.password,
                email: input.email,
                job: {
                    type: input.type,
                    company: input.company,
                    companyUrl: input.companyUrl
                }
            });
            userFacade.updateUser(newUser.firstName, newUser.lastName, newUser.userName, newUser.password, newUser.email, newUser.type, newUser.company, newUser.companyUrl); // Tjek om det her virker!
            return "User succesfully updated";
        },
        deleteUser: (root, { id }) => {
            return userFacade.deleteUser(id); 
            //return("User deleted!");
            
        } 
    }
}

module.exports = { resolvers }