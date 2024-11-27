import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './Performance.css'
import { useState } from 'react';
export default function Performance(){
    const [ isOpen, setIsOpen ] = useState(null);

    const setDisplay = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion-performance">
            <div className="title">
                <h3>Performance</h3>
                <i><FontAwesomeIcon icon={faPlus} onClick={setDisplay}/></i>
            </div>
            {
                isOpen && (
                <div className="body">
                    <h4>Puissance</h4>
                    <input type="text" /> <span>to</span> <input type="text" />
                    <h5>Cylindrée</h5>
                    <input type="text" /> <span>to</span> <input type="text" />
                </div>
                )
            }
        </div>
    )
}
