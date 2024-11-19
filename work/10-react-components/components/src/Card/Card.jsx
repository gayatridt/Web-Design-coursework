// components/Card/Card.jsx
import Button from '../Button/Button';
import './Card.css';

function Card({ title, description, image, price, onClick }) {
  return (
    <article className="card" role="article">
      <img 
        src={image} 
        alt={`${title} destination showing ${description}`} 
        className="card-image" 
      />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price" aria-label={`Price starting from ${price}`}>From {price}</p>
        <Button 
          visual="button" 
          onClick={onClick} 
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </Button>
      </div>
    </article>
  );
}

export default Card;