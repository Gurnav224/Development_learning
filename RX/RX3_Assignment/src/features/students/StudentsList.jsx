/* eslint-disable react/prop-types */
import { Link } from "react-router";
const StudentsList = ({ state }) => {
  const { students, status, error } = state;

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Student List</h1>

      {error && <p>{error}</p>}
      <ul className="list-group">
        {students.map((student) => (
          <li className="list-group-item" key={student._id}>
            <Link className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={`/students/${student._id}`}>
              {student.name} ({student.age} Age)
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
