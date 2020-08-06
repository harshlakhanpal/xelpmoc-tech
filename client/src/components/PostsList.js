import React from "react";
const PostsList = ({ posts }) => {
  return (
    <div className="posts" style={{ width: "80%" }}>
      {posts && posts.length > 0
        ? posts.map(({ content, userName }) => (
            <div
              className="post-item  "
              style={{ height: "60px", marginTop: "25px" }}
            >
              <div className="post-content"> {content}</div>
              <div className="post-user">Shared by: {userName}</div>
            </div>
          ))
        : "No posts found"}
    </div>
  );
};

export default PostsList;
