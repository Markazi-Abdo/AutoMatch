import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import './Securite.css'
import { useState } from 'react';

export default function Securite(){
    const [ isOpen, setIsOpen ] = useState(null);

    const setDisplay = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion-securite">
            <div className="title">
                <h3>Sécurite</h3>
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
