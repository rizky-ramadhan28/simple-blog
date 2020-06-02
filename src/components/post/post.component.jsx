import React from "react";
import { Link } from "react-router-dom";

import "./post.styles.css";

const Post = ({ post }) => {
  const { date, author, title } = post;

  return (
    <div className="col-12 mb-4">
      <Link className="post-link" to={`/${post.id}`}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Posted by {author} on {date}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
