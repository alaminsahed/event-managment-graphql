const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


app.use(bodyParser.json())

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(4000, () => {
    console.log('Server running on port 4000')
})