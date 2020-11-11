import { Link } from 'react-router-dom';

import { HOME, LOGIN, REGISTER } from 'constants/routes';

import classes from './index.module.css';

export default () => {
  return (
    <div className={classes.container}>
      <div>
        <Link to={HOME}>Home</Link>
      </div>
      <div className={classes.rightLinks}>
        <Link to={LOGIN}>Login</Link>
        <Link to={REGISTER}>Register</Link>
      </div>
    </div>
  );
};
