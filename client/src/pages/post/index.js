import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostCard from 'components/postCard';
import Comment from 'components/comment';

import GET_POST from './query';
import classes from './index.module.css';

export default () => {
  const { postId } = useParams();

  const { data } = useQuery(GET_POST, {
    variables: {
      postId,
    },
  });

  if (!data) return <h1>Loading...</h1>;

  return (
    <div className={classes.container}>
      <PostCard post={data?.getPost} />
      {data?.getPost.comments &&
        data?.getPost.comments.map(({ body, id, createdAt, username }) => (
          <Comment
            key={id}
            postId={data?.getPost.id}
            comment={{ body, id, createdAt, username }}
          />
        ))}
    </div>
  );
};
