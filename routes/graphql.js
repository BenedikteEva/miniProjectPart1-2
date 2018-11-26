var express = require('express');
var router = express.Router();
const graphqlHTTP = require('express-graphql');
const schema = require('../models/graphql/schema');

router.use('/graphiql', graphqlHTTP({
    //endpointURL: '/api/graphql',
    schema: schema,
    graphiql: true,
}));

module.exports = router;