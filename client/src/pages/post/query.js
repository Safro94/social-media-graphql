import { gql } from '@apollo/client';

const query = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        body
        username
        createdAt
      }
    }
  }
`;

export default query;
