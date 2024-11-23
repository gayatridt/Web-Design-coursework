// components/Modal/Modal.jsx
import { useRef, useState } from 'react'; // Add useState
import Button from '../Button/Button';
import './Modal.css';

function Modal({ isOpen, onClose }) {
  const dialogRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state for submission feedback

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Show feedback for a moment before closing
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  if (isOpen) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }

  return (
    <dialog ref={dialogRef} className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Book Your Adventure</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <select id="destination" required>
            <option value="">Select a destination</option>
            <option value="bali">Bali Paradise</option>
            <option value="swiss">Swiss Alps</option>
            <option value="japan">Japanese Journey</option>
          </select>
        </div>
        <div className="modal-buttons">
          <Button 
            type="submit" 
            visual="link"  // This fulfills the type="submit" and visual="link" requirement
          >
            Submit Booking
          </Button>
          <Button 
            type="button" 
            visual="button"  // Changed to visual="button" for better distinction
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
        {isSubmitted && (
          <div className="submission-feedback">
            Form submitted successfully!
          </div>
        )}
      </form>
    </dialog>
  );
}

export default Modal;