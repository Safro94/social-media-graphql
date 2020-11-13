import React from 'react';
import { useMutation } from '@apollo/client';

import Information from 'components/information';
import DeleteButton from 'components/deleteButton';

import { useAuth } from 'hooks/auth';

import classes from './index.module.css';
import DELETE_COMMENT from './query';

export default ({ comment, postId }) => {
  const { user } = useAuth();

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    variables: { postId: postId, commentId: comment.id },
  });

  return (
    <div className={classes.container}>
      <Information
        data={comment}
        showAvatar={false}
        customClasses={classes.comment}
      />
      {user && user.username === comment.username && (
        <div className={classes.deleteButton}>
          <DeleteButton callback={deleteComment} />
        </div>
      )}
    </div>
  );
};
