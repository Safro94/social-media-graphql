import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './components/app';
import './index.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL,
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
