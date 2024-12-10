import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const firstFocusableRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle keyboard navigation and focus management
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
      hamburgerRef.current?.focus();
    }

    if (isMobile && isMenuOpen) {
      const focusableElements = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      // Handle tab key navigation
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    }
  };

  // Focus management when menu opens
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      firstFocusableRef.current?.focus();
    }
  }, [isMenuOpen, isMobile]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !hamburgerRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isMobile]);

  return (
    <header className="header" role="banner">
      <nav className="nav container" role="navigation" aria-label="Main navigation">
        <Link 
          to="/" 
          className="nav__brand" 
          aria-label="Home page"
          tabIndex={isMobile && isMenuOpen ? -1 : 0}
        >
          <img src="./images/gd-logo.png" alt="GD initials as Logo" className="brand-logo" />
          <span>Gayatri Dubey</span>
        </Link>
        
        <div 
          ref={menuRef}
          id="nav-menu"
          className={`nav__menu ${isMenuOpen ? 'active' : ''}`}
          role="navigation"
          inert={!isMenuOpen && isMobile ? '' : undefined}
        >
          <Link 
            ref={firstFocusableRef}
            to="/" 
            className="nav__link" 
            onClick={() => isMobile && setIsMenuOpen(false)}
            tabIndex={isMobile ? (isMenuOpen ? 0 : -1) : 0}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav__link" 
            onClick={() => isMobile && setIsMenuOpen(false)}
            tabIndex={isMobile ? (isMenuOpen ? 0 : -1) : 0}
          >
            About
          </Link>
          <Link 
            to="/portfolio" 
            className="nav__link" 
            onClick={() => isMobile && setIsMenuOpen(false)}
            tabIndex={isMobile ? (isMenuOpen ? 0 : -1) : 0}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className="nav__link" 
            onClick={() => isMobile && setIsMenuOpen(false)}
            tabIndex={isMobile ? (isMenuOpen ? 0 : -1) : 0}
          >
            Contact
          </Link>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            tabIndex={isMobile ? (isMenuOpen ? 0 : -1) : 0}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {isMobile && (
          <button 
            ref={hamburgerRef}
            className="hamburger"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="nav-menu"
          >
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;