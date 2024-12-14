import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Carburant.css';

export default function Carburant() {
  const dispatch = useDispatch();

  // Local state to handle selected carburant
  const [selectedCarburant, setSelectedCarburant] = useState("");

  // Handle carburant selection
  const handleCarburantSelect = (carburantType) => {
    setSelectedCarburant(carburantType);
    dispatch({
      type: 'CARBURANT',
      payload: { carburant: carburantType },
    });
  };

  return (
    <div className="carburant-container">
      <h3>Carburant</h3>
      <div className="car-options">
        <button 
          onClick={() => handleCarburantSelect('Essence')} 
          className={selectedCarburant === 'Essence' ? 'selected' : ''}
        >
          Essence
        </button>
        <button 
          onClick={() => handleCarburantSelect('Diesel')} 
          className={selectedCarburant === 'Diesel' ? 'selected' : ''}
        >
          Diesel
        </button>
        <button 
          onClick={() => handleCarburantSelect('Hybride')} 
          className={selectedCarburant === 'Hybride' ? 'selected' : ''}
        >
          Hybride
        </button>
        <button 
          onClick={() => handleCarburantSelect('Electrique')} 
          className={selectedCarburant === 'Electrique' ? 'selected' : ''}
        >
          Electrique
        </button>
      </div>
    </div>
  );
}
