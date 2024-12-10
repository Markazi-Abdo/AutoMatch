import Product from "../Product/Product";
import './Products.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from  '@fortawesome/free-solid-svg-icons'
export default function Products({cars}){
    return(
        <div className="cars-container">
            {cars.map((car,index)=>{
                for(model of car.models){
                    for(modelAnnee of model.detailsParAnnee){
                        
                        return <Product modelAnnee={modelAnnee} key={index} />
                    }
                }
                
            })}
            <div className="to-top-button">
                <button><FontAwesomeIcon icon={faArrowUp} /></button>
            </div>
        </div>
    )
}