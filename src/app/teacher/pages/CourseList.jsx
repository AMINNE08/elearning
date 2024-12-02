import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

export default function CourseList() {
  const courses = [
    { courseName: "Introduction to Math", instructor: "John Doe", category: "Mathematics" },
    { courseName: "Physics Basics", instructor: "Jane Smith", category: "Physics" },
    { courseName: "Programming 101", instructor: "Alan Turing", category: "Computer Science" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Instructor</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course, index) => (
            <TableRow key={index}>
              <TableCell>{course.courseName}</TableCell>
              <TableCell>{course.instructor}</TableCell>
              <TableCell>{course.category}</TableCell>
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
