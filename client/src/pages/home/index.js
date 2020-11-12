import React from 'react';
import { useQuery } from '@apollo/client';

import PostCard from 'components/postCard';

import GET_POSTS from './query';
import classes from './index.module.css';

export default () => {
  const { loading, data: { getPosts: posts } = {} } = useQuery(GET_POSTS);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1 className={classes.title}>Recent Posts</h1>
      <div className={classes.posts}>
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};
