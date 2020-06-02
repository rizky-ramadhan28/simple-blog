import React, { useContext } from "react";

import { PostContext } from "../../contexts/post-context/post.context";

const PostDetails = (props) => {
  const { getSinglePost } = useContext(PostContext);

  const currentPost = getSinglePost(props.match.params.id);
  const { contents, title, author, date } = currentPost;

  return (
    <div className="card">
      <div className="card-header font-weight-bold">{title}</div>

      <div className="card-body">
        {contents.map((item, index) =>
          item.subtitle ? (
            <h5
              key={index}
              className="card-title font-weight-bold text-justify mb-4"
            >
              {item.content}
            </h5>
          ) : (
            <p key={index} className="card-text text-justify mb-4">
              {item.content}
            </p>
          )
        )}

        <small className="text-muted">
          Posted by {author} on {date}
        </small>
      </div>
    </div>
  );
};

export default PostDetails;
