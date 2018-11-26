var express = require('express');
var router = express.Router();
import graphqlHTTP from 'express-graphql';

router.use('/graphiql', graphqlHTTP({
    endpointURL: '/api/graphql',
    schema: schema,
    graphiql: true,
}));

module.exports = router;