import { useState, useEffect } from "react";

const Users = () => {
  // hooks
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // función que obtiene los datos de usuarios de la API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json)) // seteamos el estado
      .catch((error) => console.error(error));
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id.toString()}>
            <td>{user.name}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
