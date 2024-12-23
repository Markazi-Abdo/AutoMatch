import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Carburant.css';

export default function Carburant() {
  const dispatch = useDispatch();
  const [selectedCarburant, setSelectedCarburant] = useState(null);

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
          className={`Essence ${selectedCarburant === 'Essence' ? 'active' : ''}`}
        >
          Essence
        </button>
        <button
          onClick={() => handleCarburantSelect('Diesel')}
          className={`Diesel ${selectedCarburant === 'Diesel' ? 'active' : ''}`}
        >
          Diesel
        </button>
        <button
          onClick={() => handleCarburantSelect('Hybride')}
          className={`Hybride ${selectedCarburant === 'Hybride' ? 'active' : ''}`}
        >
          Hybride
        </button>
        <button
          onClick={() => handleCarburantSelect('Électrique')}
          className={`Electrique ${selectedCarburant === 'Électrique' ? 'active' : ''}`}
        >
          Électrique
        </button>
      </div>
    </div>
  );
}
