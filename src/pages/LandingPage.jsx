import Header from '../shared/components/Header';
import Hero from '../shared/components/Hero';
import CoursesSection from '../shared/components/CoursesSection';
import '../Styles/LandingPage.css'
import InstructorsSection from '../shared/components/InstructorsSection';
import Slick from '../shared/components/Slick';
import WhatsApp  from '../shared/components/WhatsUp';

function LandingPage() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <CoursesSection></CoursesSection>
      <InstructorsSection></InstructorsSection>
      <Slick></Slick>
      <WhatsApp></WhatsApp>
    </div>
  );
}

export default LandingPage;
