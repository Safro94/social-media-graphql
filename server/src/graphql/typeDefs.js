const gql = require('graphql-tag');

const Post = require('../models/Post');

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }

  type Query {
    getPosts: [Post]
  }
`;

module.exports = typeDefs;
