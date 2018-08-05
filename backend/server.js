const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

// make a new express app
const app = express();

// we tell express app, that every request to .../graphql
// we should rederect to expressGraphQL library
// it a midlleware = function which modify express server request 
app.use('/graphql', expressGraphQL({
    graphiql: true, 
    schema
}));

app.listen(4000, () => {
    console.log('Listening');
});