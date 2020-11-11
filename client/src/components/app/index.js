import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from 'components/menu';

import Home from 'pages/home';
import Login from 'pages/login';
import Register from 'pages/register';

import classes from './index.module.css';

export default () => {
  return (
    <Router>
      <div className={classes.container}>
        <Menu />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </div>
    </Router>
  );
};
