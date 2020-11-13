import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { LOGIN } from 'constants/routes';

import LIKE_POST from './query';
import classes from './index.module.css';

export default ({ user, post: { id, likes, likeCount } }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isOwner =
      user && likes.find((like) => like.username === user.username);
    setLiked(isOwner);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId: id },
  });

  const Component = ({ children, ...rest }) => (
    <>
      {user ? (
        <button
          {...rest}
          className={
            liked
              ? `${classes.button} ${classes.likeButton} ${classes.filled}`
              : `${classes.button} ${classes.likeButton}`
          }
          onClick={likePost}
        >
          {children}
        </button>
      ) : (
        <Link
          {...rest}
          className={`${classes.button} ${classes.likeButton}`}
          to={LOGIN}
        >
          {children}
        </Link>
      )}
    </>
  );

  return (
    <>
      <Component>
        <IconContext.Provider
          value={{ color: 'turquoise', className: classes.icon }}
        >
          <div className={classes.iconContainer}>
            <FaHeart />
          </div>
        </IconContext.Provider>
      </Component>
      <div className={`${classes.count} ${classes.likeCount}`}>
        <span>{likeCount}</span>
      </div>
    </>
  );
};
