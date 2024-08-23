import { useState } from "react";

const ValidateZipCode = () => {
  const [zipcode, setZipcode] = useState();

  function checkCode() {
    if (zipcode.length >= 5) {
      alert("valid zipcode");
    } else {
      alert("invalid zipcode , please enter 5 digits");
    }
  }

  return (
    <>
      <label htmlFor="zipcodeInput">Enter your zipcode</label>
      <input type="text" onChange={(e) => setZipcode(e.target.value)} />
      <button onClick={checkCode}>validate Zipcode</button>
    </>
  );
};

const CapitalizeName = () => {
  const [name, setName] = useState("");

  function nameHandler() {
    let nameArr = name.split(" ");
    let capitalizeWord = nameArr
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
      .join(" ");

    alert("capitalize name: " + capitalizeWord);
  }

  return (
    <>
      <label htmlFor="nameInput">Enter your Full Name ?</label>
      <input
        type="text"
        id="nameInput"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={nameHandler}>Capitalalize Name</button>
    </>
  );
};

const ResetSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <label htmlFor="searchInput">Enter search term</label>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button onClick={() => setSearchTerm("")}>Reset Search Term</button>
      {searchTerm && <p>{searchTerm}</p>}
    </>
  );
};

const ResetAddress = () =>{
  const [address , setAddress] = useState('');

  return(
    <>
      <label htmlFor="addressInput">Enter your Address</label>
      <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address} />
      <button onClick={()=>setAddress('')}>Reset Address</button>
      {address && <p>{address}</p>}
    </>
  )
}

const ClearMessage = () => {
  const [message , setMessage] = useState('');

  return(
    <>
      <label htmlFor="messageInput">Enter a message</label>
      <input type="text" onChange={(e)=>setMessage(e.target.value)}  value={message}/>
      <button onClick={()=>setMessage('')}>Clear Message</button>
    </>
  )
}


function App() {
  return (
    <>
      <ValidateZipCode />

      <br />
      <br />
      <CapitalizeName />
      <br />
      <br />
      <ResetSearch />
      <br />
      <br />
      <ResetAddress/>
      <br />
      <br />
      <ClearMessage/>
    </>
  );
}

export default App;
