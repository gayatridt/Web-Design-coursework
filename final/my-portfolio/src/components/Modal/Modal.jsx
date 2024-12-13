// src/components/Modal/Modal.jsx
import { useState, useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, onSave, currentSettings }) {
    const [settings, setSettings] = useState({
      layout: currentSettings?.layout || 'grid',
      imageSize: currentSettings?.imageSize || 'medium'
    });

  useEffect(() => {
    if (isOpen) {
      document.getElementById('layout').focus();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(settings);
    onClose();
  };

  return (
    <dialog open={isOpen} className="modal">
      <form method="dialog" onSubmit={handleSubmit}>
        <h2>Customize View</h2>
        
        <div className="form-group">
          <label htmlFor="layout">Layout Style</label>
          <select
            id="layout"
            value={settings.layout}
            onChange={(e) => setSettings({...settings, layout: e.target.value})}
          >
            <option value="grid">Grid View</option>
            <option value="rows">Row View</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="imageSize">Image Size</label>
          <select
            id="imageSize"
            value={settings.imageSize}
            onChange={(e) => setSettings({...settings, imageSize: e.target.value})}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="modal-actions">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </dialog>
  );
}

export default Modal;