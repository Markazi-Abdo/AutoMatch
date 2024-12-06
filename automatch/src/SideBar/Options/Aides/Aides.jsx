import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import './Aides.css'
import { useState } from 'react';

export default function Aides(){
    const [ isOpen, setIsOpen ] = useState(null);

    const setDisplay = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion-aides">
            <div className="title">
                <h3>Aides à la conduite</h3>
                <i>{!isOpen ? <FontAwesomeIcon icon={faPlus} onClick={setDisplay}/> : <FontAwesomeIcon icon={faMinus} onClick={setDisplay}/>}</i>
            </div>
            {
                isOpen && (
                <div className="body">
                    <h4>Confort</h4>
                    <input type="text" /> <span>to</span> <input type="text" />
                </div>
                )
            }
        </div>
    )
}
