const graphqlTools = require('graphql-tools')
import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type User {
        id: ID
        userName: String!
        firstName: String
        lastName: String
        password: String!
        email: String!
        job: [JobSchema]
        created: Date
        lastUpdated: Date
    }

    type JobSchema {
        type: String
        company: String
        companyUrl : String
    }

    type Query {
        getFriend(id: ID): Friend
        getFriends: (Friends)
    }

    input User {
        id: ID
        userName: String!
        firstName: String
        lastName: String
        password: String!
        email: String!
        job: [JobSchema]
        created: Date
        lastUpdated: Date
    }

    input JobSchema {
        type: String
        company: String
        companyUrl : String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
    
`;

const schema = makeExecutableSchema({ typeDefs, resolvers});

export { schema };