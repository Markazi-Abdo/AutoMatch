import './Transmission.css'

export default function Transmission(){
    return(
        <div className="trans-container">
            <h3>Transmission</h3>
            <div className="trans-options">
                <button>Manuelle</button>
                <button>Automatique</button>
                <button>Semi-Automatique</button>
            </div>
        </div>
    )
}