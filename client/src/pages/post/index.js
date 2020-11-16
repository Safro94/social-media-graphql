import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import PostCard from 'components/postCard';
import Comment from 'components/comment';
import Form from 'components/form';
import Loading from 'components/loading';

import { useAuth } from 'hooks/auth';
import { useForm } from 'hooks/form';

import { GET_POST, ADD_COMENT } from './query';
import classes from './index.module.css';

export default () => {
  const { postId } = useParams();
  const { user } = useAuth();
  const { onChange, handleSubmit, values } = useForm(createCommentCallback, {
    comment: '',
  });

  const { data } = useQuery(GET_POST, {
    variables: {
      postId,
    },
  });

  const [createComment] = useMutation(ADD_COMENT, {
    update() {
      values.comment = '';
    },
    onError(err) {
      return err;
    },
    variables: {
      postId,
      body: values.comment,
    },
  });

  function createCommentCallback() {
    createComment();
  }

  if (!data) return <Loading />;

  return (
    <div className={classes.container}>
      <div className={classes.postContainer}>
        {user && (
          <Form onSubmit={handleSubmit}>
            <h1>Post a comment</h1>
            <Form.InputContainer>
              <Form.Input
                type='text'
                value={values.username}
                placeholder='Comment...'
                name='comment'
                onChange={onChange}
              />
            </Form.InputContainer>
            <div>
              <Form.Submit type='submit'>Add comment</Form.Submit>
            </div>
          </Form>
        )}
        <PostCard post={data?.getPost} />
      </div>
      <div className={classes.comments}>
        {data?.getPost.comments && <h2 className={classes.title}>Comments</h2>}
        {data?.getPost.comments &&
          data?.getPost.comments.map(({ body, id, createdAt, username }) => (
            <Comment
              key={id}
              postId={data?.getPost.id}
              comment={{ body, id, createdAt, username }}
            />
          ))}
      </div>
    </div>
  );
};
