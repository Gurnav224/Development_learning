import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteStudentAsync, fetchStudents } from "./studentSlice";
import { useEffect } from "react";

const StudentDetail = () => {
  const { studentId } = useParams();
  const { students , status , error} = useSelector((state) => state.students);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const student = students.find((student) => student._id === studentId);


  useEffect(()=> {
    if(status === "idle"){

      dispatch(fetchStudents())
    }
  },[dispatch , status])

  const deleteHandler = () => {
    dispatch(deleteStudentAsync(studentId));

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };


  return (
    <div className="container my-4">
    {status === "loading" && <p>Loading.......</p>}
    {status === "success" && !student && <p>Student not found</p>}
    {status === "success" && student && (
    <>

      <h1>Student detail</h1>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Attendance: {student.attendance}</p>
      <p>Marks: {student.marks}</p>

      <Link className="btn btn-warning" to="/add-student" state={student}>
        Edit Details
      </Link>
      <button onClick={deleteHandler} className="btn btn-danger mx-2">
        Delete
      </button>
    </>

    )}
      
    </div>
  );
};

export default StudentDetail;
