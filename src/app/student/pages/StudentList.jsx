import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

export default function StudentList() {
  const students = [
    { name: "Alice Johnson", email: "alice.johnson@example.com", course: "Mathematics" },
    { name: "Bob Brown", email: "bob.brown@example.com", course: "Physics" },
    { name: "Charlie White", email: "charlie.white@example.com", course: "Programming" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell>
                <button>Edit</button>
                <button>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
