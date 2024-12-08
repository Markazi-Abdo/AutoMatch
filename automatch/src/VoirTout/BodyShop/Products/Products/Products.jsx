import Product from "../Product/Product";
import './Products.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from  '@fortawesome/free-solid-svg-icons'
export default function Products(){
    return(
        <div className="cars-container">
            {Array.from({length:16}).map((_,index)=>{
                return <Product key={index} />
            })}
            <div className="to-top-button">
                <button><FontAwesomeIcon icon={faArrowUp} /></button>
            </div>
        </div>
    )
}