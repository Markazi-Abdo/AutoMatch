import Header from "../Header/Header";
import SideBar from "./SideBar/SideBar";
import './App.css'
import BodyShop from "./BodyShop/Bodyshop";
import { useEffect } from "react";

export default function AppVoirTout(){
  useEffect(()=>{
    document.title ='Voir Tout';
  }, []);
  
  return(
    <div>
      <Header />
      <main>
        <aside>
          <SideBar/>
        </aside>
        <BodyShop />
      </main>
    </div>
  )
}