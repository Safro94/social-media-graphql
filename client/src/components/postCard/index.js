import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaComment } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import moment from 'moment';

import classes from './index.module.css';

export default ({
  post: { body, id, username, createdAt, likeCount, commentCount, likes },
}) => {
  const handleLikes = () => console.log('like');
  const handleComments = () => console.log('comment');

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
          <button
            className={`${classes.button} ${classes.commentButton}`}
            onClick={handleComments}
          >
            <IconContext.Provider
              value={{ color: '#3d3dd0', className: classes.icon }}
            >
              <div className={classes.iconContainer}>
                <FaComment />
              </div>
            </IconContext.Provider>
          </button>
          <div className={`${classes.count} ${classes.commentCount}`}>
            <span>{commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
