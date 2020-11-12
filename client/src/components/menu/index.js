import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuth } from 'hooks/auth';

import { HOME, LOGIN, REGISTER } from 'constants/routes';

import classes from './index.module.css';

export default () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const [active, setActive] = useState(location.pathname);

  const menu = user ? (
    <>
      <Link className={`${classes.link} ${classes.active}`} to={HOME}>
        {user.username}
      </Link>
      <div className={classes.rightLinks}>
        <span className={classes.link} onClick={logout}>
          Logout
        </span>
      </div>
    </>
  ) : (
    <>
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
    </>
  );

  return <div className={classes.container}>{menu}</div>;
};
