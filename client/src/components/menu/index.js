import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HOME, LOGIN, REGISTER } from 'constants/routes';

import classes from './index.module.css';

export default () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <div className={classes.container}>
      <Link
        className={`${classes.link} ${active === HOME && classes.active}`}
        to={HOME}
        onClick={() => setActive(HOME)}
      >
        Home
      </Link>
      <div className={classes.rightLinks}>
        <Link
          className={`${classes.link} ${active === LOGIN && classes.active}`}
          to={LOGIN}
          onClick={() => setActive(LOGIN)}
        >
          Login
        </Link>
        <Link
          className={`${classes.link} ${active === REGISTER && classes.active}`}
          to={REGISTER}
          onClick={() => setActive(REGISTER)}
        >
          Register
        </Link>
      </div>
    </div>
  );
};
