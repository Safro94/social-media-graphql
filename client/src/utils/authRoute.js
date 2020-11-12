import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'hooks/auth';
import { HOME } from 'constants/routes';

export default ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to={HOME} /> : <Component {...props} />
      }
    />
  );
};
