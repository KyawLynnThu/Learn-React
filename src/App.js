import React, { useState } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

function App() {
  let [ posts, setPosts ] = useState([
    {
      id: 1,
      title: "Post 1 Title",
      desc: "Post 1 Description"
    },
    {
      id: 2,
      title: "Post 2 Title",
      desc: "Post 2 Description"
    },
  ]);

  const addnewPost = (post) => {
    setPosts([post, ...posts])
  }

  return (
    <div className="container">
      <h1 className="text-center text-info my-3">Posts</h1>
      <Post posts={posts} />
      <AddPost addPost={addnewPost} />
    </div>
  )
}

export default App;
