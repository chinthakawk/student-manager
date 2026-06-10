import StudentItem from "./StudentItem";

function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        students.map((student) => (
          <StudentItem
            key={student.id}
            student={student}
            deleteStudent={deleteStudent}
          />
        ))
      )}
    </div>
  );
}

export default StudentList;