import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Transmission.css';

export default function Transmission() {
  const dispatch = useDispatch();
  const [selectedTransmission, setSelectedTransmission] = useState(null);

  const handleTransmissionSelect = (transmissionType) => {
    setSelectedTransmission(transmissionType);
    dispatch({
      type: 'TRANSMISSION',
      payload: { transmission: transmissionType },
    });
  };

  return (
    <div className="trans-container">
      <h3>Transmission</h3>
      <div className="trans-options">
        <button
          onClick={() => handleTransmissionSelect('Manuelle')}
          className={`Manuelle ${selectedTransmission === 'Manuelle' ? 'active' : ''}`}
        >
          Manuelle
        </button>
        <button
          onClick={() => handleTransmissionSelect('Automatique')}
          className={`Automatique ${selectedTransmission === 'Automatique' ? 'active' : ''}`}
        >
          Automatique
        </button>
        <button
          onClick={() => handleTransmissionSelect('Semi-Automatique')}
          className={`Semi-Automatique ${selectedTransmission === 'Semi-Automatique' ? 'active' : ''}`}
        >
          Semi-Automatique
        </button>
      </div>
    </div>
  );
}
