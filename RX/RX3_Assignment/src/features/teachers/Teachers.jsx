import TeachersList from "./TeachersList"
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchTeachers } from "./teacherSlice";

const Teachers = () => {
  const state = useSelector((state) => state.teachers);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchTeachers())
  },[dispatch])

  return (
    <div className="container">
     <h1 className="my-4">Add Teachers</h1>
     <button className="btn btn-warning">

     <Link  to="/add-teacher">Add Teachers</Link>
     </button>
      <TeachersList state={state}/>
    </div>
  )
}

export default Teachers
