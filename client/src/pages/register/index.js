import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import Form from 'components/form';

import { useForm } from 'hooks/form';
import { useAuth } from 'hooks/auth';

import { HOME } from 'constants/routes';

import REGISTER_USER from './query';
import classes from './index.module.css';

export default () => {
  const history = useHistory();
  const { login } = useAuth();

  const [errors, setErrors] = useState();

  const { onChange, handleSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      login(userData);
      history.push(HOME);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className={classes.container}>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <Form.InputContainer>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Input
            type='text'
            value={values.username}
            placeholder='Enter your username'
            name='username'
            onChange={onChange}
          />
        </Form.InputContainer>

        <Form.InputContainer>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Input
            type='email'
            value={values.email}
            placeholder='Enter your email'
            name='email'
            onChange={onChange}
          />
        </Form.InputContainer>

        <Form.InputContainer>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Input
            type='password'
            autoComplete='off'
            value={values.password}
            placeholder='Enter your password'
            name='password'
            onChange={onChange}
          />
        </Form.InputContainer>

        <Form.InputContainer>
          <Form.Label htmlFor='confirmPassword'>Confirm password</Form.Label>
          <Form.Input
            type='password'
            autoComplete='off'
            value={values.confirmPassword}
            placeholder='Confirm your password'
            name='confirmPassword'
            onChange={onChange}
          />
        </Form.InputContainer>

        <div>
          <Form.Submit type='submit'>Register</Form.Submit>
        </div>

        {errors && (
          <div className={classes.errors}>
            <ul>
              {Object.values(errors).map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </Form>
    </div>
  );
};
