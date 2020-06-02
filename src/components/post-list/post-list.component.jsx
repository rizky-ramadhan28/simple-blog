import React, { useContext } from "react";

import Post from "../post/post.component";

import { PostContext } from "../../contexts/post-context/post.context";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="row">
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default PostList;
