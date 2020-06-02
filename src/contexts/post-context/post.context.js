import React, { createContext, useReducer } from "react";

import post_data from "./post.data";
import postReducer from "./post.reducer";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [posts, dispatch] = useReducer(postReducer, post_data);

  const getSinglePost = (postId) => {
    return posts.find((post) => post.id === postId);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        dispatch,
        getSinglePost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
