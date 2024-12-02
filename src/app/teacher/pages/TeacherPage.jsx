import { Container, Typography } from '@mui/material';
import TeacherProfile from './TeacherProfile';
import MyCourses from '../components/MyCourses';

const TeacherPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
        Teacher Profile
      </Typography>
      <TeacherProfile />
      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 5, mb: 3 }}>
        My Courses
      </Typography>
      <MyCourses />
    </Container>
  );
};

export default TeacherPage;
