import { Grid } from '@mui/material';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'Learning jQuery Mobile',
    category: 'Business Study',
    image: 'https://example.com/course1.jpg',
    rating: 4.5,
    price: 30.00,
  },
  {
    id: 2,
    title: 'Making Music with JavaScript',
    category: 'Web Development',
    image: 'https://example.com/course2.jpg',
    rating: 4.5,
    price: 55.00,
  },
  {
    id: 3,
    title: 'The Art of Black and White Photography',
    category: 'Art & Design',
    image: 'https://example.com/course3.jpg',
    rating: 4.5,
    price: 36.00,
  },
];

const MyCourses = () => {
  return (
    <Grid container spacing={3}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.id}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyCourses;
