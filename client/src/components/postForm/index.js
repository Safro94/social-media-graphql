import React from 'react';
import { useMutation } from '@apollo/client';

import Form from 'components/form';

import { useForm } from 'hooks/form';

import CREATE_POST from './query';
import GET_POSTS from 'pages/home/query';
import classes from './index.module.css';

export default () => {
  const { onChange, handleSubmit, values } = useForm(createPostCallback, {
    body: '',
  });

  const [createPost, { error }] = useMutation(CREATE_POST, {
    update(proxy, result) {
      const data = proxy.readQuery({ query: GET_POSTS });
      proxy.writeQuery({
        query: GET_POSTS,
        data: {
          getPosts: [result.data.createPost, ...data.getPosts],
        },
      });

      values.body = '';
    },
    onError(err) {
      return err;
    },
    variables: values,
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <div className={classes.container}>
      <h1>Create a post</h1>

      <Form onSubmit={handleSubmit}>
        <Form.InputContainer>
          <Form.Input
            type='text'
            value={values.username}
            placeholder='Hi world!'
            name='body'
            onChange={onChange}
          />
        </Form.InputContainer>

        <div>
          <Form.Submit type='submit'>Create post</Form.Submit>
        </div>
      </Form>
      {error && (
        <Form.Errors errors={{ errors: error.graphQLErrors[0].message }} />
      )}
    </div>
  );
};
