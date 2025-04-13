import { useState } from "react"

// Define the user type
interface Address {
  street: string;
  suite: string;
  city: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
}

function App() {
  const [id , setId] = useState<string>();
  const [data , setData] = useState<User | null>()
  const handleSetId = async () => {
     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
     const user = await response.json();
     setData(user)
  }

  console.log(data)

  return (
    <>
    <h1>Search Directory</h1>
     <input type="number" onChange={(e) => setId(e.target.value)}  />
     <button onClick={handleSetId}>Get Data</button>
     {
     
     data && (

      <>
      <h1>Name{data.name}</h1>
      <h2>Email: {data.email}</h2>
      <h2>Phone{data.phone}</h2>
      <h2>Gender: {data.username}</h2>
      <h2>Address: {data.address.suite} {data.address.street}{data.address.city}</h2>
      </>
     )
     }
    </>
  )
}

export default App
