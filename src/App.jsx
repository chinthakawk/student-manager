import { useState } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      regNo: "E001",
      course: "Computer Science",
    },
    {
      id: 2,
      name: "Jane Smith",
      regNo: "E002",
      course: "Information Technology",
    },
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;