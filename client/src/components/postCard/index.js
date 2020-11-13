import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import moment from 'moment';

import LikeButton from 'components/likeButton';
import DeleteButton from 'components/deleteButton';

import { useAuth } from 'hooks/auth';

import classes from './index.module.css';

export default ({
  post: { body, id, username, createdAt, likeCount, commentCount, likes },
}) => {
  const { user } = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.postData}>
        <div className={classes.information}>
          <strong>{username}</strong>
          <Link to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Link>
          <span>{body}</span>
        </div>
        <div className={classes.avatarContainer}>
          <img
            className={classes.avatar}
            alt='Avatar'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
        </div>
      </div>
      <div className={classes.buttonsContainer}>
        <div>
          <div className={classes.buttonContainer}>
            <LikeButton user={user} post={{ id, likes, likeCount }} />
          </div>

          <div className={classes.buttonContainer}>
            <Link
              className={`${classes.button} ${classes.commentButton}`}
              to={`/posts/${id}`}
            >
              <IconContext.Provider
                value={{ color: '#3d3dd0', className: classes.icon }}
              >
                <div className={classes.iconContainer}>
                  <FaComment />
                </div>
              </IconContext.Provider>
            </Link>
            <div className={`${classes.count} ${classes.commentCount}`}>
              <span>{commentCount}</span>
            </div>
          </div>
        </div>
        {user && user.username === username && <DeleteButton postId={id} />}
      </div>
    </div>
  );
};
