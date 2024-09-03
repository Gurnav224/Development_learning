import  useFetch, {} from "./useFetch"



function App() {

  const {data , error , loading , fetchData} =  useFetch('https://jsonplaceholder.typicode.com/posts')

  console.log(data)


  return (
<>
  <h1>Fetch Data on Button Click</h1>
  <button onClick={fetchData}>Fetch Data</button>
  {loading && <p>Loading...............</p>}
  {error && <p>An error occured while fetching posts</p>}
 {
  data && data.length > 0 && (
    <ul>
      {
        data.map((post)=>(
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))
      }
    </ul>
  )
 }
</>  
  )
}

export default App
