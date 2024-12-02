

const CourseCard = ({ title, icon }) => {
  return (
    <div style={styles.card}>
      <img src={icon} alt={title} style={styles.icon} />
      <h3>{title}</h3>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    width: '140px',
    height: '140px',
    marginBottom: '10px',
  },
};

export default CourseCard;
