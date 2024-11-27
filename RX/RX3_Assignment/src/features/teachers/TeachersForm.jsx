import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacherAsync, updateTeacherAsync } from "./teacherSlice";
import { useLocation } from "react-router";

const TeachersForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const editTeacher = location.state;

  const [successMsg, setSuccessMsg] = useState("");
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    contactNumber: "",
    gender: "",
    department: "",
    qualifications: "",
    subjects: "",
  });




  useEffect(() => {
    if (editTeacher) {
      setTeacher(editTeacher);
    }
  }, [editTeacher]);



  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setTeacher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTeacherAsync(teacher));
    setSuccessMsg("new teacher added successfully");
    setTeacher({
      name: "",
      email: "",
      contactNumber: "",
      gender: "",
      department: "",
      qualifications: "",
      subjects: "",
    });
  };

  const handleFormUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTeacherAsync({
      teacherId:editTeacher._id,
      updateTeacher:teacher
    }))

  console.log("teacher ", teacher)


   setSuccessMsg("teacher details updated successfully")

    
  }





  return (
    <div className="container">
      {editTeacher ? (
        <>
          <h2 className="my-4">Edit Teachers</h2>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Teacher Name:
              </label>
              <input
                value={teacher.name}
                onChange={inputChangeHandler}
                className="form-control"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                value={teacher.email}
                onChange={inputChangeHandler}
                className="form-control"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                value={teacher.contactNumber}
                onChange={inputChangeHandler}
                className="form-control"
                type="tel"
                name="contactNumber"
                id="contactNumber"
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
                  checked={teacher.gender.toLowerCase() === "male"}
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
                  checked={teacher.gender.toLowerCase() === "female"}
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
                  checked={teacher.gender.toLowerCase() === "other"}
                  onChange={inputChangeHandler}
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="department">
                Department
              </label>
              <select
                onChange={inputChangeHandler}
                className="form-select"
                name="department"
                id="department"
                value={teacher.department}
              >
                <option >-- Select a Teacher --</option>
                <option value="Mathematics" >
                  Mathematics
                </option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="qualification">
                Qualifications
              </label>
              <input
                value={teacher.qualifications || ""}
                onChange={inputChangeHandler}
                className="form-control"
                type="text"
                name="qualifications"
                id="qualifications"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="subjects">
                Subjects:{" "}
              </label>
              <input
                value={teacher.subjects || "" }
                onChange={inputChangeHandler}
                className="form-control"
                type="text"
                name="subjects"
                id="subjects"
              />
            </div>
            {successMsg && <p className="fs-5 text-success">{successMsg}</p>}
            <button onClick={handleFormUpdate}  className="btn btn-success">
              Update Teacher
            </button>
            
          </form>
        </>
      ) : (
        <>
          <h2 className="my-4">Add Teachers</h2>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Teacher Name:
              </label>
              <input
                value={teacher.name}
                onChange={inputChangeHandler}
                className="form-control"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                value={teacher.email}
                onChange={inputChangeHandler}
                className="form-control"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                value={teacher.contactNumber}
                onChange={inputChangeHandler}
                className="form-control"
                type="tel"
                name="contactNumber"
                id="contactNumber"
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
                  checked={teacher.gender === "male"}
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
                  checked={teacher.gender === "female"}
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
                  checked={teacher.gender === "other"}
                  onChange={inputChangeHandler}
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="department">
                Department
              </label>
              <select
                onChange={inputChangeHandler}
                className="form-select"
                name="department"
                id="department"
              >
                <option value="">choose your department</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>

            {successMsg && <p className="fs-5 text-success">{successMsg}</p>}
            <button onClick={handleFormSubmit} className="btn btn-primary">
              Add Teacher
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default TeachersForm;
