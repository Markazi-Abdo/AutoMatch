import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import './Autonomie.css'
import { useState } from 'react';

export default function Autonomie(){
    const [ isOpen, setIsOpen ] = useState(null);

    const setDisplay = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion-autonomie">
            <div className="title">
                <h3>Autonomie</h3>
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
