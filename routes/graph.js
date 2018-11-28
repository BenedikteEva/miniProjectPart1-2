var express = require('express');
var router = express.Router();
var graphqlHTTP= require('express-graphql');

var schema=require('../models/graphqlSchema/schema').schema;


router.use('/', graphqlHTTP({
    endpointURL: '/api/graphql',
    schema: schema,
    graphiql: true,
}));  

module.exports = router;