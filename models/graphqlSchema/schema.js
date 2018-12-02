const resolvers = require('./resolvers').resolvers;
const graphqlTools = require('graphql-tools');

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
    type Position {
        user: [User]
        created: Date
        loc: [PointSchema]
    }


    scalar Date
    type PointSchema {
        latitude: Float
        longitude: Float
        
    }

    type JobSchema {
        type: String
        company: String
        companyUrl : String
    }
    type Friend{
        username:String
        latitude: Float
        longitude: Float
    }

    input InpJobSchema {
        type: String
        company: String
        companyUrl : String
    }
    type Query {
        getUserById(id: ID): User
        getUserByName(input: InpUserName):User
        getUsers:[User]
    }
    input InpUserName {
        userName: String
    }

    input LoginInput{
        userName:String!
        password:String!
        longitude: Float
        latitude:Float
        distance :Int
    }

    input UserInput {
        userName: String!
        firstName: String
        lastName: String
        password: String!
        email: String!
        job: [InpJobSchema]
    }
    input UserInputUpd {
        id: ID
        userName: String
        firstName: String
        lastName: String
        password: String
        email: String
        job: [InpJobSchema]
        password: String
     
    }
    
     
    type Mutation {
        createUser(input: UserInput):User
        updateUser(input: UserInputUpd):User
        deleteUser( id:ID): String
        loginUser(input:LoginInput):[Friend]
    
    }
`;

const schema = graphqlTools.makeExecutableSchema({ typeDefs, resolvers });

module.exports = {
    schema
};