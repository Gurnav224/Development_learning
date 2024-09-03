
import useFetch from './useFetch'

import "bootstrap/dist/css/bootstrap.min.css"
function App() {

const {data , fetchData , loading ,  error} = useFetch('https://randomuser.me/api/')




  return (
<div className="container">
  <h1 className="my-4 display-3">Fetch Data on Button Click</h1>
  <button  onClick={fetchData} className="btn btn-info btn-lg ">Get Random User</button>
  {loading && <p>loading..............</p>}
  {error && <p>{error}</p>}

  {
    data && data.results && data.results.length > 0 && (
     <div className='my-4'>
      {
        data.results.map((user)=>(
          <div key={user.name.first}>

          <p><strong>Name: </strong> {user.name.first} {user.name.last}</p>
          <p><strong>Email: </strong> {user.email}</p>
          <p><strong>City: </strong> {user.location.city}</p>
          </div>
        ))
      }
     </div>
    )
  }

</div>  
  )
}

export default App
