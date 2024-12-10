import Input from "./Search/Input/Input";
import './BodyShop.css'
import Marque from "./Search/Marque/Marque";
import Model from "./Search/Model/Model";
import Products from "./Products/Products/Products";
import {connect} from "react-redux"
function BodyShop({cars, inputCherche, marqueSelectCherche, modelSelectCherche}){
    return(
        <div className="bodyshop">
            <div className="search-container">
                <Marque cars={cars} marqueSelectCherche={marqueSelectCherche}/>
                <Model cars={cars} modelSelectCherche={modelSelectCherche}/>
                <Input cars={cars} inputCherche={inputCherche}/>
            </div>
            <div className="body">
                <Products cars={cars}/>
            </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        cars:state.cars
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        inputCherche: (input)=>dispatch({type:'INPUT', payload:{input}}),
        marqueSelectCherche: (marqueSelectValue)=>dispatch({type:'MARQUE', payload:{marqueSelectValue}}),
        modelSelectCherche: (modelSelectValue)=>dispatch({type:'MODEL', payload:{modelSelectValue}})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyShop);
