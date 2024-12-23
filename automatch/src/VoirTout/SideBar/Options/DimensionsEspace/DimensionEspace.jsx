import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './DimensionEspace.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function DimensionEspace() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPlace, setSelectedPlace] = useState(null); 
  const dispatch = useDispatch();

  const toggleDisplay = () => {
    setIsOpen(!isOpen);
  };

  const selectPlace = (place) => {
    setSelectedPlace(place);
    dispatch({
      type: 'PLACE',
      payload: {
        place,
      },
    });
  };

  return (
    <div className="accordion-dimension-espace">
      <div className="title">
        <h3>Dimension et Espace</h3>
        <i>
          {!isOpen ? (
            <FontAwesomeIcon icon={faPlus} onClick={toggleDisplay} />
          ) : (
            <FontAwesomeIcon icon={faMinus} onClick={toggleDisplay} />
          )}
        </i>
      </div>
      {isOpen && (
        <div className="body">
          <h5>Espace</h5>
          <div className="places">
            <button
              onClick={() => selectPlace(2)}
              className={`place ${selectedPlace === 2 ? 'active' : ''}`}
            >
              2 places
            </button>
            <button
              onClick={() => selectPlace(4)}
              className={`place ${selectedPlace === 4 ? 'active' : ''}`}
            >
              4 places
            </button>
            <button
              onClick={() => selectPlace('>4')}
              className={`place ${selectedPlace === '>4' ? 'active' : ''}`}
            >
              &gt;4 places
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
