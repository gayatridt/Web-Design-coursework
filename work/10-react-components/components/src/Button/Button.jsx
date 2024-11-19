// components/Button/Button.jsx
import { useState } from 'react';
import './Button.css';

function Button({ 
  children, 
  onClick, 
  type = 'button', 
  visual = 'button',
  className = '' 
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(true);
    onClick?.(e);
    setTimeout(() => setClicked(false), 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  return (
    <div className="button-wrapper">
      <button
        type={type}
        className={`btn btn-${visual} ${className} ${clicked ? 'clicked' : ''}`}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        aria-label={typeof children === 'string' ? children : undefined}
      >
        {children}
      </button>
      {clicked && <span className="click-feedback" role="status" aria-live="polite">Button clicked!</span>}
    </div>
  );
}

export default Button;