import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card"; // Import the Card component instead of CardList
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';

export default function Slick() {
  const settings = {
    infinite: true,
    slidesToShow: 2, // Show 3 cards at a time
    centerMode: false, // Focus on the center card
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  };

  const cardData = [
    {
      name: "Russell Sprout",
      title: "Data Scientist",
      description:
        "Skill Flow helped me gain the confidence and skills to transition into data science. The hands-on projects and supportive community made all the difference.",
      imageUrl: pic1, // Replace with actual image URL
    },
    {
      name: "John Doe",
      title: "Software Engineer",
      description: 
        "Before Skill Flow, I struggled to break into the tech industry. Now, I'm a full-time software engineer at a top company, thanks to the personalized learning path.",
      imageUrl: pic2, // Replace with actual image URL
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      description: 
        "Skill Flow completely transformed my career. The practical approach to learning and industry-relevant projects prepared me for real-world challenges.",
      imageUrl: pic3, // Replace with actual image URL
    },
  ];

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Student Feedback</h2>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <Card
              name={card.name}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
