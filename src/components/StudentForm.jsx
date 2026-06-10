import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !regNo || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      regNo,
      course,
    };

    addStudent(newStudent);

    setName("");
    setRegNo("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Registration Number"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;