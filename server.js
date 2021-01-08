const { ApolloServer, gql } = require('apollo-server');

const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'})

console.log('path', process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('DB Connected'))
    .catch(err => console.log('DB connection error: ', err));

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }
  type Query {
    getTodos: [Todo]
  }
`;


const server = new ApolloServer({ typeDefs });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

