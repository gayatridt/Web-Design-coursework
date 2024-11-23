// components/Header/Header.jsx
import Button from '../Button/Button';
import './Header.css';

function Header({ setCurrentPage }) {
  const handleLogoClick = () => {
    setCurrentPage('text'); // Navigate to home/text page when logo is clicked
  };

  return (
    <header className="header">
      <div className="header-container">
        <div 
          className="logo" 
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleLogoClick();
            }
          }}
          aria-label="Return to homepage"
        >
          <img 
            src="/images/logo.png" 
            alt="Wanderlust Adventures Logo - Click to return home" 
          />
        </div>
        <div className="header-content">
          <h1>Wanderlust Adventures</h1>
          <nav>
            <Button visual="link" onClick={() => setCurrentPage('text')}>
              About
            </Button>
            <Button visual="link" onClick={() => setCurrentPage('cards')}>
              Destinations
            </Button>
            <Button visual="link" onClick={() => setCurrentPage('panels')}>
              Travel Guide
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;