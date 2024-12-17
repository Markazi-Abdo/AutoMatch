import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import './Performance.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Performance() {
    const [isOpen, setIsOpen] = useState(null);
    const dispatch = useDispatch();

    const setDisplay = () => {
        setIsOpen(!isOpen);
    };

    const handlePuissanceFilter = (range) => {
        dispatch({ type: 'PUISSANCE', payload: { puissance: range } });
    };

    //const handleCylindreFilter = (range) => {
    //    dispatch({ type: 'CYLINDRE', payload: { cylindre: range } });
    //};

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
                        <button onClick={() => handlePuissanceFilter("50-100")}>50 - 100</button>
                        <button onClick={() => handlePuissanceFilter("100-200")}>100 - 200</button>
                        <button onClick={() => handlePuissanceFilter("200-300")}>200 - 300</button>
                    </div> 
                    
                    {/* 
                        Partie de cylindrée
                        <h5>Cylindrée</h5>
                        <div className="cylindree">
                            <button onClick={() => handleCylindreFilter("1000-1500")}>1000 - 1500</button>
                            <button onClick={() => handleCylindreFilter("1500-2000")}>1500 - 2000</button>
                            <button onClick={() => handleCylindreFilter("2000-3000")}>2000 - 3000</button>
                        </div>
                    */}
                </div>
            )}
        </div>
    );
}
