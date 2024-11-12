import { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

function App() {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleReorder = () => {
    setCount(5);
  };

  return (
    <main className="inventory-dashboard">
      <section className="inventory-card">
        <h1 className="inventory-title">Inventory Manager</h1>
        <div className="inventory-status">
          <span className="status-label">Current Stock:</span>
          <div className="inventory-controls">
            <button 
              className="control-button"
              onClick={decrement}
              disabled={!count}
              aria-label="Decrease inventory"
            >
              −
            </button>
            <span className={`count-display ${count === 0 ? 'count-warning' : ''}`}>
              {count}
            </span>
            <button 
              className="control-button"
              onClick={increment}
              aria-label="Increase inventory"
            >
              +
            </button>
          </div>
          {count === 0 && <Reorder onReorder={handleReorder} />}
        </div>
        <div className="stock-status">
          <div className={`status-indicator ${count === 0 ? 'empty' : 'available'}`}>
            {count === 0 ? 'Out of Stock' : 'In Stock'}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;