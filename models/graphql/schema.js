const resolvers =require('./resolvers');
const graphqlTools = require('graphql-tools')
const makeExecutableSchema = graphqlTools.makeExecutableSchema();

// MAngler required og dates.
const typeDefs = `
    type User {
        id: ID
        userName: String
        firstName: String
        lastName: String
        password: String
        email: String
        job: [JobSchema]

    }
    
`;

const schema = makeExecutableSchema({ typeDefs, resolvers});

module.exports = { schema };