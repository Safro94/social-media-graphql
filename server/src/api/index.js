require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => 'Hello world',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(process.env.MONGO_DB_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => server.listen({ port: process.env.PORT }))
  .then((res) => console.log(`Server running at ${res.url}`));
