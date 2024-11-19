// App.jsx
import { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TextPage from './pages/TextPage';
import CardsPage from './pages/CardsPage';
import PanelsPage from './pages/PanelsPage';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('text');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'text':
        return <TextPage setCurrentPage={setCurrentPage} />;
      case 'cards':
        return <CardsPage setCurrentPage={setCurrentPage} />;
      case 'panels':
        return <PanelsPage setCurrentPage={setCurrentPage} />;
      default:
        return <TextPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
        <Button 
          type="button" 
          visual="button" 
          onClick={() => setIsModalOpen(true)}
        >
          Book Your Trip
        </Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
