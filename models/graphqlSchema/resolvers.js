import mongoose from 'mongoose';
const userFacade = require('../../facades/userFacade');

// resolver map
const resolvers = {
    Query: {
        getFriendById: ({ id }) => {
            return userFacade.findById(id);
        },
        getFriendById: ({ username }) => {
            return userFacade.findByUsername(username)
        },
        getFriends: async () => {
            return await userFacade.getFriends();
        }
    },
    Mutation: {
        createFriend:(root, {input}) => {
            const newUser = new newUser({
                userName: input.userName,
                firstName: input.firstName,
                lastName: input.lastName,
                password: input.password,
                email: input.email,
                type: input.type,
                company: input.company,
                companyUrl: input.companyUrl
            });

            newUser.id = newUser._id; // Tjek om denne linje skal slettes!

            return userFacade.addUser(newUser);
        },
        updateFriend: (root, { input }) => {
            return userFacade.updateUser(input); // Tjek om det her virker!
        },
        deleteFriend: (root, { id }) => {
            return userFacade.deleteUser(id); // Tjek om denne her virker! Evt returner success besked.
        } 
     },
};

module.exports = { resolvers };
