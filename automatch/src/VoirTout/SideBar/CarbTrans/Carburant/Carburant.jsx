import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Carburant.css';

export default function Carburant() {
  const dispatch = useDispatch();
  const [selectedCarburant, setSelectedCarburant] = useState("");

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
          className="Essence"
        >
          Essence
        </button>
        <button 
          onClick={() => handleCarburantSelect('Diesel')} 
          className="Diesel"
        >
          Diesel
        </button>
        <button 
          onClick={() => handleCarburantSelect('Hybride')} 
          className="Hybride"
        >
          Hybride
        </button>
        <button 
          onClick={() => handleCarburantSelect('Électrique')} 
          className="Electrique"
        >
          Electrique
        </button>
      </div>
    </div>
  );
}
