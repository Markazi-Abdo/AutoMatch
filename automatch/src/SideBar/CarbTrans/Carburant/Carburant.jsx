import './Carburant.css';

export default function Carburant(){
    return(
        <div className="carburant-container">
            <h3>Carburant</h3>
            <div className="car-options">
                <button>Essence</button>
                <button>Diesel</button>
                <button>Hybride</button>
                <button>Electrique</button>
            </div>
        </div>
    )
}