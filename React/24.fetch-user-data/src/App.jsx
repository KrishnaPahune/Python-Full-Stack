import React, { useEffect } from "react";
import { useState } from "react";
function App() {
  const [user, setUser] = React.useState(null);
  const [userId, setUserId] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  function incrementUserId() {
    setUserId((prev) => prev + 1);
  }

  return (
    <div>
      <h1>Fetch user data</h1>

      {user !== null && (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      )}
      <button onClick={incrementUserId}>Next User</button>

    </div>
  );
}

export default App;
