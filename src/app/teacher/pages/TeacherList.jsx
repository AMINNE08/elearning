import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

export default function TeacherList() {
  const teachers = [
    { name: "John Doe", email: "john.doe@example.com", subject: "Math" },
    { name: "Jane Smith", email: "jane.smith@example.com", subject: "Science" },
    { name: "Alan Turing", email: "alan.turing@example.com", subject: "Computer Science" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher, index) => (
            <TableRow key={index}>
              <TableCell>{teacher.name}</TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell>{teacher.subject}</TableCell>
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
