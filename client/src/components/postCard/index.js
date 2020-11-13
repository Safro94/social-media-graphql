import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useMutation } from '@apollo/client';

import LikeButton from 'components/likeButton';
import DeleteButton from 'components/deleteButton';
import Information from 'components/information';

import { useAuth } from 'hooks/auth';

import classes from './index.module.css';
import DELETE_POST from './query';
import GET_POSTS from 'pages/home/query';

export default ({
  post: { body, id, username, createdAt, likeCount, commentCount, likes },
}) => {
  const { user } = useAuth();

  const [deletePost] = useMutation(DELETE_POST, {
    update(proxy) {
      const data = proxy.readQuery({ query: GET_POSTS });
      proxy.writeQuery({
        query: GET_POSTS,
        data: {
          getPosts: data.getPosts.filter((post) => post.id !== id),
        },
      });
    },
    variables: { postId: id },
  });

  return (
    <div className={classes.container}>
      <Information data={{ body, id, createdAt, username }} />
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
        {user && user.username === username && (
          <DeleteButton callback={deletePost} />
        )}
      </div>
    </div>
  );
};
