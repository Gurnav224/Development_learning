import useFetch from "./useFetch"

const Dashboard = () => {
    const { data , error} = useFetch('http://localhost:3000/admin/dashboard');

    console.log(
        data, error
    )
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
