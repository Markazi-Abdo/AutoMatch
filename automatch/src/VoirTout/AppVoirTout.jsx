import Header from "../Header/Header";
import SideBar from "./SideBar/SideBar";
import './App.css'
import BodyShop from "./BodyShop/Bodyshop";
import { useEffect } from "react";
import {connect} from 'react-redux';
import Products from "./BodyShop/Products/Products/Products";
//Abdellatif Markazi
//Ouiam Adham

function AppVoirTout({cars, inputCherche, marqueSelectCherche, modelSelectCherche}){
  useEffect(()=>{
    document.title ='Voir Tout';
  }, []);
  
  return(<div>
    <Header />
    <div className="voirTout">
      <div className="header">
        
      </div>
      <aside>
          <SideBar/>
      </aside>
      <main>
        <div className="bodyShop">
        <BodyShop cars={cars} marqueSelectCherche={marqueSelectCherche} modelSelectCherche={modelSelectCherche} inputCherche={inputCherche} />
        </div>
      <div className="products">
      {!cars || cars.length === 0?<p className="no-cars-message">Aucune voiture disponible pour le moment.</p>:
   
        <Products cars={cars}/>}
        </div>      
      </main>

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

export default connect(mapStateToProps, mapDispatchToProps)(AppVoirTout);