import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  setTopStudent,
  updateSchoolStats,
} from "../students/studentSlice";
import { fetchTeachers, updateTeacherStats } from "../teachers/teacherSlice";

const School = () => {
  const { students } = useSelector((state) => state?.students);
  const { schoolStats, topStudent } = useSelector((state) => state?.students);
  const { teachers , teacherStats} = useSelector((state) => state.teachers);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchTeachers());
  }, [dispatch]);

  useEffect(() => {
    const totalStudents = students.length;

    const averageAttendance =
      students.reduce(
        (totalAttendance, student) => totalAttendance + student.attendance,
        0
      ) / totalStudents;

    const averageMarks =
      students.reduce((totalMarks, student) => totalMarks + student.marks, 0) /
      totalStudents;

    const topStudent = students.reduce(
      (topStudent, currentStudent) =>
        currentStudent.marks > topStudent.marks ? currentStudent : topStudent,
      students[0]
    );

    dispatch(
      updateSchoolStats({
        totalStudents,
        averageAttendance,
        averageMarks,
        topStudent,
      })
    );

    dispatch(setTopStudent(topStudent?.name));
  }, [dispatch, students]);


  useEffect(() => {
    const totalTeachers = teachers?.length;
    const mathsTeacher = teachers.filter((teacher) => teacher?.subjects?.toLowerCase().includes("maths")  );
    const scienceTeacher = teachers.filter((teacher) => teacher?.department?.toLowerCase().includes("science"))
    const phdTeachers = teachers.filter((teacher) => teacher?.qualifications?.toLowerCase().includes("phd"))
    

    dispatch(updateTeacherStats({totalTeachers, mathsTeacher, scienceTeacher, phdTeachers}))
  },[dispatch, teachers])

  return (
    <div className="container my-4">
      <h1>School view</h1>
      {students.length === 0 ? (
        <p>Loading...............</p>
      ) : (
        <>
          <h2 className="my-3">Teacher Stats</h2>
          <p>Total Teachers: {teacherStats.totalTeachers}</p>
          <p>Number Of Maths Teachers: {teacherStats.mathsTeacher.length}</p>
          <p>Number Of Science Teachers: {teacherStats.scienceTeacher.length}</p>
          <p>Phd Teachers:  {teacherStats.phdTeachers.map((teacher) => teacher.name).join(", ")}</p>
          <hr />
          <h2 className="my-3">Student Stats</h2>
          <p>Total Students: {schoolStats.totalStudents}</p>
          <p>
            Average Attendance: {schoolStats.averageAttendance?.toFixed(2)}
          </p>
          <p>Average Marks: {schoolStats.averageMarks.toFixed(2)}</p>
          <p>Top Student: {topStudent}</p>
        </>
      )}
    </div>
  );
};

export default School;
