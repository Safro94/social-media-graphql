import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import classes from './index.module.css';

export default ({
  data: { body, id, username, createdAt },
  showAvatar = true,
  customClasses,
}) => {
  return (
    <div
      className={
        showAvatar
          ? `${classes.container} ${customClasses}`
          : `${classes.container} ${classes.noAvatar} ${customClasses}`
      }
    >
      <div className={classes.information}>
        <strong className={classes.username}>{username}</strong>
        <Link to={`/posts/${id}`} className={classes.createdAt}>
          {moment(createdAt).fromNow()}
        </Link>
        <span>{body}</span>
      </div>
      {showAvatar && (
        <div className={classes.avatarContainer}>
          <img
            className={classes.avatar}
            alt='Avatar'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
        </div>
      )}
    </div>
  );
};
