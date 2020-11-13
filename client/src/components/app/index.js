import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from 'components/menu';

import Home from 'pages/home';
import Login from 'pages/login';
import Register from 'pages/register';
import Post from 'pages/post';

import { AuthProvider } from 'hooks/auth';

import AuthRoute from 'utils/authRoute';

import { HOME, LOGIN, REGISTER, POST } from 'constants/routes';

import classes from './index.module.css';

export default () => {
  return (
    <AuthProvider>
      <Router>
        <div className={classes.container}>
          <Menu />
          <div className={classes.content}>
            <Route exact path={HOME} component={Home} />
            <AuthRoute exact path={LOGIN} component={Login} />
            <AuthRoute exact path={REGISTER} component={Register} />
            <Route exact path={POST} component={Post} />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};
