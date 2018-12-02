import { User } from '../User';
const userFacade = require('../../facades/userFacade');
const loginFacade = require('../../facades/loginFacade');
const resolvers = {
    Query: {
        getUserById: (root, { id }) => {
            return userFacade.findById(id);
        },
        getUserByName: (root, { input }) => {
            return userFacade.findByUsername(input.userName)
        },
        getUsers: () => {
            return userFacade.getAllUsers();
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

            // newUser.id = newUser._id;

            return userFacade.addUser(newUser.firstName, newUser.lastName, newUser.userName, newUser.password, newUser.email, newUser.type, newUser.company, newUser.companyUrl);
        },

        updateUser: (root, { input }) => {
            return  userFacade.updateUser(input.id, input); 
        },
        deleteUser: async (root, { id }) => {
            console.log(id);
            // return userFacade.deleteUser(id); 
            // if(err) console.log(err);
            // else return("User deleted!");

            // Går uden om facaden.
            return new Promise((resolve) => {
                User.remove({ _id: id }, (err) => {
                    if(err) reject(err)
                    else resolve("Successfully deleted user.")
                });
            });
            
        }, 
        loginUser:async(root, {input})=>{
          const friends= await loginFacade.login(input.userName, input.password, input.longitude, input.latitude, input.distance*1000);
     
            return friends.friends
        }
    }
};

module.exports = { resolvers }