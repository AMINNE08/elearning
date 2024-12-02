import '../Style/InstructorsSection.css'; // External CSS for styles
import teacher from '../images/teacher.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; // Importing CSS for animations

const InstructorsSection = () => {
  return (
    <div className="instructors-section">
      <div className="text-section">
      <ScrollAnimation animateIn="fadeIn">
      <h1>
          Apprends avec <span className="highlight">des instructeurs</span> qualifiés
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft" delay={500}>
      <p>
          En plus dêtre des experts dans leur domaine, ce sont des mentors qui se
          focalisent sur les besoins de chaque étudiant.
        </p>
      </ScrollAnimation>
        
        <button className="contact-button">Contacter un conseiller</button>
      </div>
      <div className="image-section" >
        <img
          src={teacher} 
          alt="Instructeur avec étudiant"
        />
      </div>
    </div>
  );
};

export default InstructorsSection;
