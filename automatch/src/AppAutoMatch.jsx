import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import './App.css'
import BodyShop from "./BodyShop/Bodyshop";
import { useEffect } from "react";

export default function AppAutoMatch(){
  useEffect(()=>{
    document.title ='Voir Tout';
  }, []);
  
  return(
    <div>
      <Header />
      <main>
        <SideBar />
        <BodyShop />
      </main>
    </div>
  )
}