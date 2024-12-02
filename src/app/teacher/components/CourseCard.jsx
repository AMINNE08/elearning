import { Card, CardContent, CardMedia, CardActions, Typography, Rating, Grid } from '@mui/material';

const CourseCard = ({ course }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={course.image} alt={course.title} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {course.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {course.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating value={course.rating} readOnly />
        <Typography variant="body1">${course.price}</Typography>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
