import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import './Technologie.css'
import { useState } from 'react';

export default function Technolgie(){
    const [ isOpen, setIsOpen ] = useState(null);

    const setDisplay = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion-technologie">
            <div className="title">
                <h3>Technologie</h3>
                <i>{!isOpen ? <FontAwesomeIcon icon={faPlus} onClick={setDisplay}/> : <FontAwesomeIcon icon={faMinus} onClick={setDisplay}/>}</i>
            </div>
            {
                isOpen && (
                <div className="body">
                    <h4>Technologie</h4>
                    <input type="text" /> <span>to</span> <input type="text" />
                </div>
                )
            }
        </div>
    )
}
