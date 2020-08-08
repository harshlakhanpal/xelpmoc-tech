import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";
import PostsList from "./PostsList";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:9000/posts");
    setPosts(data);
    //  console.log(data);
  };
  return (
    <div className="feed">
      <div>
        <Post fetchPosts={fetchPosts} />
      </div>
      <PostsList posts={posts} />
      <div></div>
    </div>
  );
};

export default Feed;
