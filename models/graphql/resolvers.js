var mongoose = require('mongoose');
const userFacade = require('../../facades/userFacade');

// resolver map
const resolvers = {
    Query: {
        getFriends: async () => {
            return await userFacade.getFriends();
        }
    },
    /* Mutation: {
        createFriend:(root, {input}) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                ag: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            });

            newFriend.id = newFriend._id;

            return newFriend.save();
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, object) => {
                Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
                    if(err) reject(err)
                    else resolve(friend)
                })
            })
        },
        deleteFriend: (root, { id }) => {
            return new Promise((resolve, object) => {
                Friends.remove({ _id: id }, (err) => {
                    if(err) reject(err)
                    else resolve("Successfully deleted friend.")
                })
            })
        } */
    // },
};

module.exports = { resolvers };