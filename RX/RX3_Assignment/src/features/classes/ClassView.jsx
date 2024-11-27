import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchStudents, setFilter, setSortBy } from "../students/studentSlice";

const ClassView = () => {
    const {students} = useSelector((state) => state.students);
    const dispatch = useDispatch();

    useEffect(()=> {
dispatch(fetchStudents())
    },[])

    const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value))
    }

    const handleSortChange = (event) => {
        dispatch(setSortBy(event.target.value))
    }

    
    return (
    <div className="container">
        <h1 className="my-4">Class View</h1>
        
        <div className="row">
            <div className="col-md-6 my-4">
            <label className="form-label" htmlFor="filter-by-gender">Filter By Gender</label>
            <select onChange={handleFilterChange} className="form-select" name="filter-by-gender" id="filter-by-gender">
                <option value="All">All</option>
                <option value="male">Boys</option>
                <option value="female">Girls</option>
            </select>
            </div>
            <div className="col-md-6 my-4">
                <label className="form-label" htmlFor="sortBy">Sort By</label>
                <select className="form-select" onChange={handleSortChange} name="sortBy" id="sortBy">
                    <option value="name">Name</option>
                    <option value="marks">Marks</option>
                    <option value="attendance">Attendance</option>
                </select>
            </div>
        </div>
        <ul>
            {
                students.map((student) => (
                <li  key={student._id}>
                   <p className="fw-bold">{student.name} - {student.age} - {student.gender} - Marks: {student.marks} - Attendance: - {student.attendance}</p>
                   </li>
             ))
            }
        </ul>
    </div>
  )
}

export default ClassView
