import Header from "./components/Header";
import Students from "./features/students/Students";
import School from "./features/schools/School";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentForm from "./features/students/StudentForm";
import StudentDetail from "./features/students/StudentDetail";
import ClassView from "./features/classes/ClassView";
import Teachers from "./features/teachers/Teachers";
import TeachersForm from './features/teachers/TeachersForm';
import TeacherDetails from './features/teachers/TeacherDetails';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Students/>}  />
        <Route path="/schools" element={<School/>} />
        <Route path="/add-student" element={<StudentForm/>} />
        <Route path="/students/:studentId" element={<StudentDetail/>}  />
        <Route path="/classes" element={<ClassView/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="add-teacher" element={<TeachersForm/>} />
        <Route path="/teachers/:teacherId" element={<TeacherDetails/>} />
      </Routes>
    </Router>
  )
}

export default App
