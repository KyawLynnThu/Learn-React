import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import AddPost from './components/AddPost';
import PostDetail from './components/PostDetail';

function App() {
   const END_POINT = "http://localhost:9000/posts";
   let [posts, setPosts] = useState([]);

   const addnewPost = async (post) => {
      console.log("Post is ", post);
      await fetch(END_POINT, {
         method: "POST",
         body: JSON.stringify({
            title: post.title,
            desc: post.desc
         }),
         headers: {
            "content-type": "application/json"
         }
      });
      setPosts([post, ...posts]);
   }

   useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(END_POINT);
        let posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
      fetchData();
    }, []);


   const postDeleteHandler = async (id) => {
      await fetch(END_POINT + "/" + id, {
         method: "DELETE"
      });
      setPosts(posts.filter(post => post.id !== id));
   }

   return (
      <div className="container">
         <h1 className="text-center text-info my-3">Posts</h1>
         <Router>
            <Routes>
               <Route path="/" element={<Post posts={posts} removePost={postDeleteHandler} />} />
               <Route path="/add" element={<AddPost addPost={addnewPost} />}></Route>
               <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
         </Router>
      </div >
   );
}


export default App;