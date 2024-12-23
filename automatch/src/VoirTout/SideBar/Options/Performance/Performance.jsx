import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Performance.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Performance() {
    const [isOpen, setIsOpen] = useState(true);
    const selectedPuissance = useSelector((state) => state.selectedPuissance);
    const selectedCylindree = useSelector((state) => state.selectedCylindre); 
    const dispatch = useDispatch();

    console.log(selectedCylindree);

    const setDisplay = () => {
        setIsOpen(!isOpen);
    };

    const handlePuissanceFilter = (range) => { 
        dispatch({ type: 'PUISSANCE', payload: { puissance: range } });
    };

    const handleCylindreFilter = (range) => { 
        dispatch({ type: 'CYLINDRE', payload: { cylindre: range } });
    };

    return (
        <div className="accordion-performance">
            <div className="title">
                <h3>Performance</h3>
                <i onClick={setDisplay}>
                    {!isOpen ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
                </i>
            </div>
            {isOpen && (
                <div className="body">
                    <h4>Puissance</h4>
                    <div className="puissance">
                        <button
                            onClick={() => handlePuissanceFilter("50-100")}
                            className={`puissance-button ${selectedPuissance === "50-100" ? 'active' : ''}`}
                        >
                            50 - 100
                        </button>
                        <button
                            onClick={() => handlePuissanceFilter("100-200")}
                            className={`puissance-button ${selectedPuissance === "100-200" ? 'active' : ''}`}
                        >
                            100 - 200
                        </button>
                        <button
                            onClick={() => handlePuissanceFilter("200-300")}
                            className={`puissance-button ${selectedPuissance === "200-300" ? 'active' : ''}`}
                        >
                            200 - 300
                        </button>
                    </div>

                    <h5>Cylindrée</h5>
                    <div className="cylindree">
                        <button
                            onClick={() => handleCylindreFilter("1000-1500")}
                            className={`cylindree-button ${selectedCylindree === "1000-1500" ? 'active' : ''}`}
                        >
                            1000-1500
                        </button>
                        <button
                            onClick={() => handleCylindreFilter("1500-2000")}
                            className={`cylindree-button ${selectedCylindree === "1500-2000" ? 'active' : ''}`}
                        >
                            1500-2000
                        </button>
                        <button
                            onClick={() => handleCylindreFilter("2000-2500")}
                            className={`cylindree-button ${selectedCylindree === "2000-2500" ? 'active' : ''}`}
                        >
                            2000-2500
                        </button>
                        <button
                            onClick={() => handleCylindreFilter("2500-3000")}
                            className={`cylindree-button ${selectedCylindree === "2500-3000" ? 'active' : ''}`}
                        >
                            2500-3000
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
