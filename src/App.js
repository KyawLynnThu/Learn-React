import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

function App() {
  const DB_NAME = "PostDB";
  let [ posts, setPosts ] = useState([]);

  const addnewPost = (post) => {
    setPosts([post, ...posts])
  }
 
  useEffect(() => {
    let data = localStorage.getItem(DB_NAME);
    if (data) setPosts(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem(DB_NAME, JSON.stringify(posts));
  }, [posts]);

  const postDeleteHandler = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className="container">
      <h1 className="text-center text-info my-3">Posts</h1>
      <Post posts={posts} removePost={postDeleteHandler} />
      <AddPost addPost={addnewPost} />
    </div>
  )
}

export default App;
