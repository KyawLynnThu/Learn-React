import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";

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
      <div>
        <h1 className="text-center text-info my-3">Posts</h1>
        <br /><br />
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Post posts={posts} removePost={postDeleteHandler} />} />
          <Route path="/add" element={<AddPost addPost={addnewPost} />}></Route>
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
