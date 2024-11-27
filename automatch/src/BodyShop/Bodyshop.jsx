import Input from "./Search/Input/Input";
import './BodyShop.css'
import Marque from "./Search/Marque/Marque";
import Model from "./Search/Model/Model";
import Products from "./Products/Products/Products";

export default function BodyShop(){
    return(
        <div className="bodyshop">
            <div className="search-container">
                <Marque/>
                <Model/>
                <Input/>
            </div>
            <div className="body">
                <Products/>
            </div>
        </div>
    )
}