// pages/PanelsPage.jsx
import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './PanelsPage.css';

function PanelsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="panels-page" role="main">
      <h2>Travel Guide</h2>
      
      <article className="panel">
        <div className="panel-content">
          <h3>Planning Your Trip</h3>
          <p>Our expert travel consultants will help you create the perfect itinerary based on your interests and preferences. With over a decade of experience, we understand that each traveler is unique. We'll help you choose the right destinations, accommodations, and activities that match your travel style and budget.</p>
          <p>From luxury resorts to authentic homestays, from guided tours to independent exploration, we'll craft an experience that's perfectly tailored to you. Our team stays up-to-date with the latest travel trends and destination insights to ensure you get the most out of your journey.</p>
        </div>
        <img 
          src="/images/planning.jpg" 
          alt="Travel consultant helping with trip planning"
          role="img" 
        />
      </article>

      <article className="panel reverse">
        <div className="panel-content">
          <h3>Local Experiences</h3>
          <p>Immerse yourself in authentic local cultures with our carefully selected experiences and activities. Connect with local communities, learn traditional crafts, and participate in cultural ceremonies. Our network of local guides and artisans will help you discover hidden gems and experience destinations like a local.</p>
          <p>Whether it's cooking classes in Italy, tea ceremonies in Japan, or wildlife safaris in Africa, we ensure each experience is authentic, respectful, and memorable. We prioritize sustainable tourism practices that benefit local communities while providing you with unforgettable memories.</p>
        </div>
        <img 
          src="/images/local.jpg" 
          alt="Travelers experiencing local culture"
          role="img" 
        />
      </article>

      <div className="action-buttons">
        <Button 
          type="button" 
          visual="button" 
          onClick={() => setIsModalOpen(true)}
          aria-label="Open booking consultation form"
        >
          Book Consultation
        </Button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-title"
      >
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Form submitted');
          }}
          role="form"
          aria-label="Booking consultation form"
        >
          <Button 
            type="submit" 
            visual="link"
            aria-label="Submit booking request"
          >
            Submit Request
          </Button>
        </form>
      </Modal>
    </section>
  );
}

export default PanelsPage;