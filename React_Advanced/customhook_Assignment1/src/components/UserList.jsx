import useFetch from "../customHooks/useFetch"



export default function UserList(){

    const {data , error , loading } = useFetch('https://jsonplaceholder.typicode.com/users',[])

    return(
        <div>
        {loading && <p>Loading......</p>}
        {error && <p>{error.message}</p>}
        <ul>
            {
            data.map((user) => (
            <li key={user.id}>
                {user.name}
            </li>
            ))
            }
        </ul>
        </div>
    )
}