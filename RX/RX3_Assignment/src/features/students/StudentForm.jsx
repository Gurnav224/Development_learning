import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentAsync, updateStudentAsync } from "./studentSlice";
import { useLocation} from "react-router";

const StudentForm = () => {
  const location = useLocation();
  const editStudent = location.state;
  const [successMsg , setSuccessMsg] = useState("");

  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    gender: "",
    marks: "",
    attendance: "",
    grade: "",
  });



  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    const { name, value  } = event.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newStudent)
    dispatch(addStudentAsync(newStudent));
    setSuccessMsg("new student added successfully")
    setNewStudent({
      name: "",
      age:"",
      marks: "",
      gender:"",
      attendance: "",
      grade: "",
    });
  };

  const handleUpdatedForm = (event) => {
    event.preventDefault();
    dispatch(
      updateStudentAsync({
        studentId: editStudent._id,
        updatedStudent: newStudent,
      })
    );
    setSuccessMsg("student details udpated successfully")
   
  };

  useEffect(() => {
    if (editStudent) {
      setNewStudent(editStudent);
    }
  }, [editStudent]);



  return (
    <div className="container my-4">
      {editStudent ? (
        <>
          <h1>Edit Student</h1>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name:{" "}
              </label>
              <input
                className="form-control"
                value={newStudent.name || ""}
                type="text"
                name="name"
                id="name"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="age">
                Age:{" "}
              </label>
              <input
                className="form-control"
                value={newStudent.age || ""}
                type="number"
                name="age"
                id="age"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="grade">
                Grade:{" "}
              </label>
              <input
                className="form-control"
                value={newStudent.grade || ""}
                type="text"
                name="grade"
                id="grade"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender: </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={inputChangeHandler}
                  checked={newStudent.gender === "male"}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={inputChangeHandler}
                  checked={newStudent.gender === "female"}
                />
                <label htmlFor="female" className="form-check-label">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={newStudent.gender === "other"}
                  onChange={inputChangeHandler}
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="attendance">
                Attendance
              </label>
              <input
                type="number"
                name="attendance"
                value={newStudent.attendance || ""}
                className="form-control"
                id="attendance"
                onChange={inputChangeHandler}

              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="marks">
                Marks:{" "}
              </label>
              <input
                type="number"
                name="marks"
                className="form-control"
                value={newStudent.marks || ""}
                id="marks"
                onChange={inputChangeHandler}

              />
            </div>
            {successMsg && <p className="fs-5 text-success">{successMsg}</p>}
            <button onClick={handleUpdatedForm} className="btn btn-primary">
              Update
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>Add Student</h1>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name:{" "}
              </label>
              <input
                className="form-control"
                value={newStudent.name}
                type="text"
                name="name"
                id="name"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="age">
                Age:{" "}
              </label>
              <input
                className="form-control"
                value={newStudent.age}
                type="number"
                name="age"
                id="age"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="grade">
                Grade:{" "}
              </label>
              <input
                className="form-control"
                value={newStudent.grade}
                type="text"
                name="grade"
                id="grade"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender: </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={newStudent.gender==="male"}
                  onChange={inputChangeHandler}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={newStudent.gender === "female"}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="female" className="form-check-label">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={newStudent.gender === "other"}
                  onChange={inputChangeHandler}
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            {successMsg && <p className="fs-5 text-success">{successMsg}</p>}
            <button onClick={handleSubmit} className="btn btn-primary">
              Add
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default StudentForm;
