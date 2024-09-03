import useFetch, {} from './useFetch'


function App() {

const {data , error ,loading} = useFetch('https://randomuser.me/api/?results=3',{})

console.log(data)

  return (
    <>
   <h1>Random Users</h1>

{
  loading && <p>Loading......................</p>
}

{
  error && <p>an error occured while fetching the users....... </p>
}

{
  data && data.results && data.results.length > 0 ? (
    <>
      {
        data.results.map((user , index)=>(
          <div key={index}>
            <img src={user.picture.medium} alt="" />
            <p>Name: {user.name.first} {user.name.last}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.location.city}</p>
          </div>
        ))
      }
    </>
  ):(
 <p>No User found</p>
  )
}


    
    </>
  )
}

export default App
