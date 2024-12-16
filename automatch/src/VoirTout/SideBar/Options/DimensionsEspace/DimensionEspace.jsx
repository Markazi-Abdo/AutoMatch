import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './DimensionEspace.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function DimensionEspace() {
  const [isOpen, setIsOpen] = useState(false); // Toggle accordion state
  const dispatch = useDispatch(); // Redux dispatch

  const toggleDisplay = () => {
    setIsOpen(!isOpen); // Toggle accordion visibility
  };

  const selectPlace = (places) => {
    dispatch({
      type: 'FILTER_PLACE',
      payload: {
        place: places, // Dispatch the selected seat capacity
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
            <button onClick={() => selectPlace(2)} className='place'>2 places</button>
            <button onClick={() => selectPlace(4)} className='place'>4 places</button>
            <button onClick={() => selectPlace(">4")} className='place'>&gt; 4places</button>
          </div>
        </div>
      )}
    </div>
  );
}
