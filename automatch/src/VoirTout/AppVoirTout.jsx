import Header from "../Header/Header";
import SideBar from "./SideBar/SideBar";
import './App.css'
import BodyShop from "./BodyShop/Bodyshop";
import { useEffect } from "react";
import {connect} from 'react-redux';
import Products from "./BodyShop/Products/Products/Products";
import {useState} from 'react'
//Abdellatif Markazi
//Ouiam Adham: fix 1er filtrage cars filtered cars

function AppVoirTout({cars, filteredCars, inputCherche, marqueSelectCherche, modelSelectCherche}){
  useEffect(()=>{
    document.title ='Voir Tout';
  }, []);
  const[modelN, setModelN] = useState('')
  
  function modelNotif(selectedModel){
    setModelN(selectedModel)
  }
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
        <BodyShop cars={cars} marqueSelectCherche={marqueSelectCherche} modelSelectCherche={modelSelectCherche} inputCherche={inputCherche} modelNotif={modelNotif} />
        </div>
      <div className="products">
     
        <Products cars={filteredCars} modelN={modelN}/>
        </div>      
      </main>

    </div>
    </div>
    
  )
}




const mapStateToProps =(state)=>{
  return {
      cars:state.cars,
      filteredCars:state.filteredCars
  }
}


const mapDispatchToProps=(dispatch)=>{
  return{
      inputCherche: (input)=>{dispatch({type:'INPUT', payload:{input}})},
      marqueSelectCherche: (marqueSelectValue)=>dispatch({type:'MARQUE', payload:{marqueSelectValue}}),
      modelSelectCherche: (modelSelectValue)=>dispatch({type:'MODEL', payload:{modelSelectValue}})
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppVoirTout);