import useFetch from './useFetch'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

const {data , error ,loading} = useFetch('https://jsonplaceholder.typicode.com/posts',{})

console.log(data)

  return (
    <div className='container'>
   <h1 className='my-4'>Posts</h1>

{
  loading && <p>Loading......................</p>
}

{
  error && <p>an error occured while fetching the users....... </p>
}


{
  data &&  data.length > 0 ? (
    <ul className='list-group'>
      {
        data.map((post)=>(
          <li className='list-group-item mb-3' key={post.id}>
           <h3>{post.title}</h3>
           <p>{post.body}</p>
          </li>
        ))
      }
    </ul>
  ):(
 <p>No Posts found</p>
  )
}




    
    </div>
  )
}

export default App
