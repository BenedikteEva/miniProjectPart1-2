var mongoose = require('mongoose');
var users = require('../User.js');
var User = mongoose.model('User', users.UserSchema);
const userFacade = require('../../facades/userFacade');
require("../..//dbSetup.js")();
var db = mongoose.connection;
const ObjectId = mongoose.Types.ObjectId;
// resolver map
// resolver map

/* const prepare = (o) => {
    o._id = o._id.toString()
    return o
} */
const resolvers = {
    Query: {
        getUserById: async (root,{ ID }) => {
            return await userFacade.findById(ID);
        },
        getUserByName:async (root,{ input }) => {
            console.log('here'+input.userName)
            return await User.findOne({
                userName: input.userName
            });
        },
        getUsers: () => {
            console.log('her we are users')
            return User.find({});
        }
    },
    Mutation: {
        createUser: (root, { input }) => {
            const newUser = new newUser({
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

            // newUser.id = newUser._id; // Tjek om denne linje skal slettes!
            userFacade.addUser(newUser.firstName, newUser.lastName, newUser.userName, newUser.password, newUser.email, newUser.type, newUser.company, newUser.companyUrl);
            return { message: "User succesfully added" }
        },
        updateUser: (root, { input }) => {
            const newUser = new newUser({
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
        deleteUser: async (root, { id }) => {
            console.log(prepare(ObjectId(id)))

            return new Promise((resolve, reject) => {
                User.findOneAndDelete({ _id: prepare(ObjectId(id)) }, (err) => {
                    if (err) reject(err)
                    else resolve("succesfully deleted user")
                }

                )
            })
        }
    }
}


module.exports = { resolvers }