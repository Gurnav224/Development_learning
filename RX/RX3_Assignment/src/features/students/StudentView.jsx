import { Link } from "react-router-dom";
const StudentView = () => {
  return (
    <div className="my-4">
      <button className="btn btn-warning">
        <Link className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/add-student">Add Student</Link>
      </button>
    </div>
  );
};

export default StudentView;
