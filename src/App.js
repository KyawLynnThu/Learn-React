import React, { useState } from "react";
import User from "./components/users/User";
function App() {
  let users = [
    {
      id: 1,
      image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
      phone: "09123123123",
      cell: "096060606060",
      name: "Mg Mg"
    },
    {
      id: 2,
      image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
      phone: "09321321321",
      cell: "097070707070",
      name: "Ag Ag"
    },
    {
      id: 3,
      image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
      phone: "09213213213",
      cell: "098080808080",
      name: "Kg Kg"
    }
  ];

  let [count, setCount] = useState(users.length); // [ variable, method to change variable's value ]= defaultValue

  return (
    <div className="container my-5">
      <div>
        <h1>{count}</h1>
      </div>
      {/* First Way
      <User image={users[0].image} phone={users[0].phone} cell={users[0].cell} name={users[0].name} />
      <User image={users[1].image} phone={users[1].phone} cell={users[1].cell} name={users[1].name} /> */}

      {/* Second Way
      <User data={users[0]} /> */}

      <button className="btn btn-info btn-sm my-5" onClick={() => {
        setCount(++count);
      }}>Change</button>

      {/* Third Way */}
      {
        users.map(usr => <User key={usr.id} data={usr} />)
      }
    </div>
  )
}

export default App;
