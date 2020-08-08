import React, { useState } from "react";
import axios from "axios";
const Post = ({ fetchPosts }) => {
  const [content, setContent] = useState("");
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePost = async () => {
    const userName = JSON.parse(localStorage.getItem("user")).name;
    //  console.log(userName);
    await axios.post("http://localhost:9000/post", { content, userName });
    setContent("");
    fetchPosts();
  };

  return (
    <div className="post">
      <textarea
        rows="10"
        className="input neumorphic"
        placeholder="Share your thoughts"
        value={content}
        onChange={handleContentChange}
      />
      <button
        className="button"
        style={{ alignSelf: "flex-end" }}
        onClick={handlePost}
      >
        Share
      </button>
    </div>
  );
};

export default Post;
