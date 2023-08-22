import React, { useEffect, useState } from "react";
import User from "./components/users/User";

function App() {
  let [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(users => {
      let rawUsers = users.results;
      let filteredUsers = rawUsers.map(usr => {
        return {
          uuid: usr.login.uuid,
          name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
          phone: usr.phone,
          cell: usr.cell,
          image: usr.picture.thumbnail
        }
      })
      setUsers(filteredUsers)
    })
    .catch(err => console.log(err))
  }, [])

  const removeUserHandler = (uuid) => {
    let remainUsers = users.filter(usr => usr.uuid !== uuid);
    setUsers(remainUsers)
  }
   
  return (
    <div className="container my-5">
      <div>
        <h1 className="text-center my-5 text-info">Our Employee</h1>
        {
          users.map(usr => <User key={usr.uuid} user={usr} remove={removeUserHandler} />)
        }
      </div>
    </div>
  )
}

export default App;
