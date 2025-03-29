import { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [secret, setSecret] = useState("supersecret");
  const token = localStorage.getItem('adminToken');



  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/admin/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ secret }),
    });
    const data = await response.json();
    localStorage.setItem("adminToken", JSON.stringify(data));
    console.log(data);
  };
  return (
    <>
      <input
        type="text"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {
        token && 
        <Dashboard/>
      }
    </>
  );
}

export default App;
