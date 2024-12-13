import Input from "./Search/Input/Input";
import './BodyShop.css'
import Marque from "./Search/Marque/Marque";
import Model from "./Search/Model/Model";
import {useState} from 'react'

export default function BodyShop({cars,marqueSelectCherche,modelSelectCherche,inputCherche, modelNotif}){
    const [modelCars, setModelCars] = useState([])
    function handleMarqueToModel(selectedMarque){
        setModelCars(cars.filter((car)=>{return car.marque.nom == selectedMarque}))
    }
    return(
        <div className="bodyshop">
            <div className="search-container">
                <Marque cars={cars} marqueSelectCherche={marqueSelectCherche} handleMarqueToModel={handleMarqueToModel}/>
                <Model cars={modelCars} modelSelectCherche={modelSelectCherche} modelNotif={modelNotif}/>
                <Input cars={cars} inputCherche={inputCherche}/>
            </div>
            
        </div>
    )
}

