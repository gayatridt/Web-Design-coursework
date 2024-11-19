// pages/TextPage.jsx
import './TextPage.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

function TextPage() {
    return (
      <section className="text-page" role="main">
        <article>
          <h2>Welcome to Wanderlust Adventures</h2>
          <p>Embark on a journey of discovery with Wanderlust Adventures, your premier travel companion in exploring the world's most breathtaking destinations. Since 2010, we've been crafting unforgettable travel experiences for adventurers like you.</p>
          
          <h3>Our Philosophy</h3>
          <p>We believe travel is more than just visiting new places – it's about immersing yourself in different cultures, creating lasting memories, and discovering new perspectives. Our carefully curated trips combine adventure, comfort, and authentic local experiences.</p>
          
          <h3>Why Choose Us</h3>
          <p>With over a decade of experience in the travel industry, we pride ourselves on:</p>
          <ul role="list" aria-label="Our key features">
            <li>Personalized travel planning</li>
            <li>Expert local guides</li>
            <li>Sustainable tourism practices</li>
            <li>24/7 travel support</li>
          </ul>

          <div className="action-buttons">
            <Button 
              type="button" 
              visual="link" 
              onClick={() => console.log('Link-style button clicked')}
              aria-label="Learn more about our services"
            >
              Learn More About Us
            </Button>
          </div>
        </article>
      </section>
    );
}

export default TextPage;