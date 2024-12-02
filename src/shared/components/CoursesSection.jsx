import CourseCard from './CourseCard';
import Pc from '../images/Pc.webp'
import stat from '../images/stat.webp'
import bio from '../images/bio.webp'
import social from '../images/social.webp'
import business from '../images/business.webp'


const courses = [
  { title: 'Computer Science', icon: Pc },
  { title: 'Data Analysis & Statistics', icon: stat },
  { title: 'Business & Management', icon: business },
  { title: 'Social Sciences', icon: social },
  { title: 'Biology & Life Sciences', icon: bio },
];

const CoursesSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.namehead}>Our Popular Courses</h2>
      <div style={styles.cardContainer}>
        {courses.map((course) => (
          <CourseCard key={course.title} title={course.title} icon={course.icon} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  namehead:{
    margin: "15px",
    padding:"30px"
  }
};

export default CoursesSection;
