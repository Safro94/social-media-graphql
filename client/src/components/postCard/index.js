import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaComment, FaTrash } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import moment from 'moment';

import { useAuth } from 'hooks/auth';

import classes from './index.module.css';

export default ({
  post: { body, id, username, createdAt, likeCount, commentCount, likes },
}) => {
  const { user } = useAuth();
  const handleLikes = () => console.log('like');

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
            <button
              className={`${classes.button} ${classes.likeButton}`}
              onClick={handleLikes}
            >
              <IconContext.Provider
                value={{ color: 'turquoise', className: classes.icon }}
              >
                <div className={classes.iconContainer}>
                  <FaHeart />
                </div>
              </IconContext.Provider>
            </button>
            <div className={`${classes.count} ${classes.likeCount}`}>
              <span>{likeCount}</span>
            </div>
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
        {user && user.username === username && (
          <div
            className={`${classes.buttonContainer} ${classes.trashButtonContainer}`}
          >
            <button
              className={`${classes.button} ${classes.trashButton}`}
              onClick={handleLikes}
            >
              <IconContext.Provider
                value={{ color: 'white', className: classes.icon }}
              >
                <div className={classes.iconContainer}>
                  <FaTrash />
                </div>
              </IconContext.Provider>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
