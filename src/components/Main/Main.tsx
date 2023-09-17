import  { useEffect, useState } from "react";

function Main() { 
 
  const [user, setUser] = useState([]);
 
  const fetchData = () => {
    return fetch(import.meta.env.VITE_API_URL + "/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj:any, index) => (
            <li key={userObj.id}>[{index}] - {userObj.name}</li>
          ))}
      </ul>

    </main>
  );
}

export default Main;