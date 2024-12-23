import { useSelector, useDispatch } from 'react-redux';
import './Transmission.css';

export default function Transmission() {
  const dispatch = useDispatch();
  const selectedTransmission = useSelector((state) => state.selectedTransmission);

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
