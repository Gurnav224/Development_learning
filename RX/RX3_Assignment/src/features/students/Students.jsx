import { useEffect } from "react";
import StudentsList from "./StudentsList"
import StudentView from "./StudentView"
import { useDispatch, useSelector} from "react-redux"
import { fetchStudents } from "./studentSlice";

const Students = () => {
    const state = useSelector((state) => state.students);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudents())
    },[])



  return (
    <div className="container">
      <h1 className="my-3">Student View</h1>

      <StudentView/>
      <StudentsList state={state}/>
    </div>
  )
}

export default Students
