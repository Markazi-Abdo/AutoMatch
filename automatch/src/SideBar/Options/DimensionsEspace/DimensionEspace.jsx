import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './DimensionEspace.css'
import { useState } from 'react';
export default function DimensionEspace(){
    const [ isOpen, setIsOpen ] = useState(null);

    const setDisplay = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion-dimension-espace">
            <div className="title">
                <h3>Dimension et Espace</h3>
                <i><FontAwesomeIcon icon={faPlus} onClick={setDisplay}/></i>
            </div>
            {
                isOpen && (
                <div className="body">
                    <h4>Dimension</h4>
                    <input type="text" /> <span>to</span> <input type="text" />
                    <h5>Espace</h5>
                    <input type="text" /> <span>to</span> <input type="text" />
                </div>
                )
            }
        </div>
    )
}
