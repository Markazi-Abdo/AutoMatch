import Input from "./Search/Input/Input";
import './BodyShop.css'
import Marque from "./Search/Marque/Marque";
import Model from "./Search/Model/Model";

export default function BodyShop({cars,marqueSelectCherche,modelSelectCherche,inputCherche}){
    return(
        <div className="bodyshop">
            <div className="search-container">
                <Marque cars={cars} marqueSelectCherche={marqueSelectCherche}/>
                <Model cars={cars} modelSelectCherche={modelSelectCherche}/>
                <Input cars={cars} inputCherche={inputCherche}/>
            </div>
            
        </div>
    )
}

