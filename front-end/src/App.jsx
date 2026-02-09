import { useEffect, useState } from "react";

const API = "http://localhost:5000/api/users";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await fetch(API);
    setUsers(await res.json());
  };

  const addUser = async () => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });
    setName("");
    setEmail("");
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h2>Mini Deploy Project</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <br /><br />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br /><br />
      <button onClick={addUser}>Add User</button>

      {users.map(u => (
        <p key={u._id}>{u.name} - {u.email}</p>
      ))}
    </div>
  );
}

export default App;
