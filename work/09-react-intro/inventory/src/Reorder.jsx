import './Reorder.css';

function Reorder({ onReorder }) {
  return (
    <button 
      className="reorder-button"
      onClick={onReorder}
      aria-label="Reorder inventory"
    >
      <span className="reorder-icon">↻</span>
      Reorder
    </button>
  );
}

export default Reorder;