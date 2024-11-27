/* eslint-disable react/prop-types */

import { Link } from "react-router";

const TeachersList = ({state}) => {
  

  const {teachers , error , status} = state

  if(status === "loading") {
    return <p>Loading...............</p>
  }

  return (
    <div>
      <h1 className="my-4">Teacher List</h1>
      {error && <p>{error}</p>}
       <ul className="list-group">
        {
          teachers?.map((teacher) => (
          <li className="list-group-item" key={teacher._id}>
            <Link className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={`/teachers/${teacher._id}`}>{teacher.name}</Link>
          </li>
          ))
        }
       </ul>
    </div>
  )
}

export default TeachersList
