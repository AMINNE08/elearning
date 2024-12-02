import "../Style/cards.css"; // Add CSS styles here for custom styling

// Individual card component
const Card = ({ name, title, description, imageUrl }) => {
  return (
    <div className="container ">
<div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
      
    </div>
    </div>
    
  );
};

export default Card;
