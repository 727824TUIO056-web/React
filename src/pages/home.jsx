import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>
          {u.firstName} {u.lastName}
        </div>
      ))}
    </div>
  );
}

export default Home;