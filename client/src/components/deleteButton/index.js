import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useMutation } from '@apollo/client';

import classes from './index.module.css';
import DELETE_POST from './query';
import GET_POSTS from 'pages/home/query';

export default ({ postId, callback }) => {
  const [deletePost] = useMutation(DELETE_POST, {
    update(proxy) {
      const data = proxy.readQuery({ query: GET_POSTS });
      proxy.writeQuery({
        query: GET_POSTS,
        data: {
          getPosts: data.getPosts.filter((post) => post.id !== postId),
        },
      });

      if (callback) callback();
    },
    variables: { postId },
  });

  return (
    <div
      className={`${classes.buttonContainer} ${classes.trashButtonContainer}`}
    >
      <button
        className={`${classes.button} ${classes.trashButton}`}
        onClick={deletePost}
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
  );
};
