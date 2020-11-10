const posts = require('./posts');
const users = require('./users');
const comments = require('./comments');

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },

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
