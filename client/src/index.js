import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import App from './components/app';
import './index.css';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_URL,
});

const authorizationLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : '' },
  };
});

const client = new ApolloClient({
  link: authorizationLink.concat(httpLink),
  cache: new InMemoryCache(),
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>{' '}
  </React.StrictMode>,
  document.getElementById('root')
);
