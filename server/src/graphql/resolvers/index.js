const posts = require('./posts');
const users = require('./users');
const comments = require('./comments');

module.exports = {
  Query: {
    ...posts.Query,
  },

  Mutation: {
    ...posts.Mutation,
    ...users.Mutation,
    ...comments.Mutation,
  },

  Subscription: {
    ...posts.Subscription,
  },
};
