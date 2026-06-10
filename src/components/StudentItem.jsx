function StudentItem({ student, deleteStudent }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{student.name}</h3>

      <p>
        <strong>Registration No:</strong> {student.regNo}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <button onClick={() => deleteStudent(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentItem;