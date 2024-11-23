// pages/CardsPage.jsx
import Card from '../Card/Card';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './CardsPage.css';

function CardsPage({ setCurrentPage }) {
  const destinations = [
    {
      title: "Bali Paradise",
      description: "Experience the magic of Indonesian culture and beaches. Discover ancient temples, terraced rice fields, and pristine beaches. Enjoy luxurious spa treatments, traditional dance performances, and world-class surfing spots. Perfect for both relaxation seekers and adventure enthusiasts.",
      image: "/images/bali.jpg",
      price: "$1,299"
    },
    {
      title: "Swiss Alps",
      description: "Adventure in the heart of Europe's most stunning mountains. Explore picturesque villages, ride scenic train routes, and enjoy world-class skiing. Experience Swiss hospitality, taste authentic fondue, and hike through breathtaking alpine meadows. Ideal for nature lovers and outdoor enthusiasts.",
      image: "/images/swiss.jpg",
      price: "$1,899"
    },
    {
      title: "Japanese Journey",
      description: "Discover the perfect blend of tradition and modernity in Japan. From ancient temples in Kyoto to Tokyo's neon lights, immerse yourself in Japanese culture. Experience tea ceremonies, stay in traditional ryokans, and savor authentic sushi. A perfect mix of cultural exploration and modern excitement.",
      image: "/images/japan.jpg",
      price: "$2,199"
    }
  ];

  return (
    <section className="cards-page" role="main">
      <h2>Popular Destinations</h2>
      <div className="cards-grid" role="list" aria-label="Destination cards">
        {destinations.map((dest, index) => (
          <Card 
            key={index}
            {...dest}
            onClick={() => setCurrentPage('panels')}
          />
        ))}
      </div>
      <div className="action-buttons">
        <Button 
          type="button" 
          visual="button" 
          onClick={() => console.log('Button-style button clicked')}
          aria-label="View all available destinations"
        >
          View All Destinations
        </Button>
      </div>
    </section>
  );
}

export default CardsPage;