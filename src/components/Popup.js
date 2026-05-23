const Popup = ({ show, onClose }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
          <h3>Not Yet Available</h3>
          <p>This feature is coming soon.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default Popup;