import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from 'components/menu';

import Home from 'pages/home';
import Login from 'pages/login';
import Register from 'pages/register';

import { HOME, LOGIN, REGISTER } from 'constants/routes';

import classes from './index.module.css';

export default () => {
  return (
    <Router>
      <div className={classes.container}>
        <Menu />
        <div className={classes.content}>
          <Route exact path={HOME} component={Home} />
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={REGISTER} component={Register} />
        </div>
      </div>
    </Router>
  );
};
