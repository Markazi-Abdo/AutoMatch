import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Transmission.css';

export default function Transmission() {
  const dispatch = useDispatch();

  const handleTransmissionSelect = (transmissionType) => {
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
          onClick={() => handleTransmissionSelect("Manuelle")} 
          className= 'Manuelle'
        >
          Manuelle
        </button>
        <button 
          onClick={() => handleTransmissionSelect("Automatique")} 
          className= 'Automatique'
        >
          Automatique
        </button>
        <button 
          onClick={() => handleTransmissionSelect("Semi-Automatique")} 
          className= 'Semi-Automatique'
        >
          Semi-Automatique
        </button>
      </div>
    </div>
  );
}
