import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './Personnalisation.css'
import { useState } from 'react';

export default function Personnalisation(){
    const [ isOpen, setIsOpen ] = useState(null);

    const setDisplay = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion-personnalisation">
            <div className="title">
                <h3>Personnalisation</h3>
                <i><FontAwesomeIcon icon={faPlus} onClick={setDisplay}/></i>
            </div>
            {
                isOpen && (
                <div className="body">
                    <h4>Personnalisation</h4>
                    <input type="text" /> <span>to</span> <input type="text" />
                </div>
                )
            }
        </div>
    )
}
