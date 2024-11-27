import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router"
import { deleteTeacherAsync, fetchTeachers } from "./teacherSlice";
import { Link } from "react-router";

const TeacherDetails = () => {
  const {teacherId} = useParams();
  const {teachers , status} = useSelector((state) => state.teachers);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(()=> {
    if(status === "idle"){

      dispatch(fetchTeachers())
    }
  },[dispatch, status])

  const teacher =  teachers.find((teacher) => teacher._id === teacherId)


const handleTeacherDelete  = () => {
  dispatch(deleteTeacherAsync(teacherId))

  setTimeout(() => {
    navigate('/teachers')
  },1000)
}
 
  return (
    <div className="container my-4">
      <h1>Teacher Details</h1>

    {status === "loading" && <p>Loading Teacher detail.......</p>}
    {status === "success" && !teacher && <p>Teacher not found</p>}
    {
      status === "success" && teacher && (
        <>

        <p>Teacher Name: {teacher.name}</p>
        <p>Email:  {teacher.email}</p>
        <p>Contact Number: {teacher.contactNumber}</p>
        <p>Gender: {teacher.gender}</p>
        <p>Department: {teacher.department}</p>
        <p>Qualifications: {teacher.qualifications }</p>
        <p>Subjects: {teacher.subjects}</p>
        <Link state={teacher} className="btn btn-warning text-white" to={'/add-teacher'}>Edit Teacher</Link>
        <button onClick={handleTeacherDelete} className="btn btn-danger mx-2">Delete</button>
        </>
      )
    }

    </div>
  )
}

export default TeacherDetails
