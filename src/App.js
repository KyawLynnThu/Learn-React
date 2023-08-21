import React from "react";
import User from "./components/users/User";
function App() {
  let image = "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
  return (    
    <div className="container my-5">
      <User image={image} phone="09123123123" cell="096060606060" />
      <User image={image} phone="09321321321" cell="097070707070" />
    </div>
  )
}

export default App;
