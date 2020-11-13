import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostCard from 'components/postCard';

import { HOME } from 'constants/routes';

import GET_POST from './query';
import classes from './index.module.css';

export default () => {
  const { postId } = useParams();
  const history = useHistory();

  const { data } = useQuery(GET_POST, {
    variables: {
      postId,
    },
  });

  const deletePostCallback = () => {
    history.push(HOME);
  };

  if (!data) return <h1>Loading...</h1>;

  return (
    <div className={classes.container}>{<PostCard post={data?.getPost} />}</div>
  );
};
