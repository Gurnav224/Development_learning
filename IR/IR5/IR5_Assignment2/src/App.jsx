import { useState } from "react";
import useFetch from "./useFetch";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const { data, fetchData, loading, error } = useFetch(
    "https://randomuser.me/api/?results=3"
  );

  const [showInfo, setShowInfo] = useState(false);
  console.log(data)
  console.log(showInfo)

  return (
    <div className="container">
      <h1 className="my-4 display-4">People Directory</h1>
      <button onClick={fetchData} className="btn btn-primary btn-lg ">
        Get People
      </button>
      {loading && <p>loading..............</p>}
      {error && <p>{error}</p>}

      {data && data.results && data.results.length > 0 && (

        <div className="my-4 row">
          {data.results.map((user) => (
            <div key={user.name.first} className="col-md-4">
              <div className="card">
                <img src={user.picture.large} alt="" className="img-fluid" />
                <div className="card-body">
                  <p>
                    <strong>Name: </strong> {user.name.first} {user.name.last}
                  </p>
                  <p>
                    <strong>Age: </strong> {user.dob.age}
                  </p>
                  <p>
                    <strong>Gender: </strong>
                    {user.gender}
                  </p>
                  <p>
                    <strong>Username: </strong>
                    {user.login.username}
                  </p>
                  <p>
                    <strong>Email: </strong> {user.email}
                  </p>

                  {
                    showInfo && (
                      <>
                        <p><strong>Phone Number: </strong> {user.cell}</p>
                        <p><strong>Full Address: </strong> {user.location.street.number} , {user.location.street.name} , {user.location.city} , {user.location.state} {user.location.country}, {user.location.postcode}</p>
                      </>
                    )
                  }
                </div>
              </div>

            </div>
          ))}

          <div className="d-grid gap-2 col-6 mx-auto my-4">
          <button onClick={()=>setShowInfo((prev)=>!prev)} className="btn btn-primary btn-lg">Show More Info</button>

</div>
       

        </div>

      )}
    </div>
  );
}

export default App;
