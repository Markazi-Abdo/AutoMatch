import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './Confort.css'
import { useState } from 'react';

export default function Confort(){
    const [ isOpen, setIsOpen ] = useState(null);

    const setDisplay = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion-confort">
            <div className="title">
                <h3>Confort</h3>
                <i><FontAwesomeIcon icon={faPlus} onClick={setDisplay}/></i>
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
