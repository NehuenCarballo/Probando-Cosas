
import { useState } from "react";

function UssersApp() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleFetch = () => {
    fetchUsers();
  };

  return (
    <>
      <h1>Listado Random</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>Nombre: {user.name}</li>
        ))}
      </ul>
      <button onClick={handleFetch}>Llamar</button>
    </>
  );
}

export default UssersApp;
