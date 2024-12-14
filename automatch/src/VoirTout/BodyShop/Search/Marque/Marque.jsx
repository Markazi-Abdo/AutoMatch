import './Marque.css'
import {useState} from 'react'
export default function Marque({cars, marqueSelectCherche, handleMarqueToModel}){

    const[marqueSelectValue, setMarqueSelectValue]=useState("");

    function handleChange(e){
        setMarqueSelectValue(e.target.value)
        handleMarqueToModel(e.target.value)

        marqueSelectCherche(e.target.value)// or e.target.value
    }
    return(

        <div className="marque-container">
            <h3>Marque</h3>
            <select id="marque" value={marqueSelectValue} onChange={handleChange}>
                
            <option value="">Marque</option>
            {cars.map((car)=>{
                return <option key={car.marque.nom}
                value={car.marque.nom} >{car.marque.nom}</option>
                
            })
            
            }
            </select>
            {console.log("Selected marque:", marqueSelectValue)}

        </div>
    )
}