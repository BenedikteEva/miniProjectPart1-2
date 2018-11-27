
const resolvers = require('./resolvers').resolvers;

const graphqlTools = require('graphql-tools')
const typeDefs = `
    type User {
      
        _id: ID
        userName: String!
        firstName: String
        lastName: String
        password: String!
        email: String!
        job: [JobSchema]
        created: Date
        lastUpdated: Date
    }
   
    scalar Date


    type JobSchema {
        type: String
        company: String
        companyUrl : String
    }

input InpJobSchema {
        type: String
        company: String
        companyUrl : String
    }
    type Query {
        getUserById(input: IdInput): User
        getUserByName(input: InpUserName):User
        getUsers:[User]
    }

    input UserInput {
        userName: String!
        firstName: String
        lastName: String
        password: String!
        email: String!
        job: [InpJobSchema]
     
    }
     
    input IdInput{
        _id:String
    }
    input InpUserName{
        userName:String
    }
 
    type Mutation {
        createUser(input: UserInput):User
        updateUser(input: UserInput):User
        deleteUser( _id:ID): String
    }
    
`;





 const schema =graphqlTools.makeExecutableSchema({typeDefs, resolvers});

module.exports={
    schema
}