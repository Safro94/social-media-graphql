import { gql } from '@apollo/client';

const query = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export default query;
