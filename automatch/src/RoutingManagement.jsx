import { Route , Routes } from "react-router-dom"
import HomePage from "./Home Page/HomePage"
import App from "./Riyad/App"
import CarDetails from "./Print Page/all"
import AppAutoMatch from "./AppAutoMatch"
import ModelApp from "./Model Page/ModelApp"
export default function RoutingManagement() {
  return (
    <Routes>


        {/* ------ Home Page ------ */}
        <Route path = '/acceuil' element = {<HomePage/>} />


        {/* ------ Rechercher ------ */}

            {/* !!!!!------ Choisir marque ------ !!!!!*/}
            <Route path = '/rechercher-marque' element = {<App/>} />

            {/* !!!!!------ Choisir Model ------ !!!!!*/}
            <Route path = '/modele' element = {<ModelApp/>} />


        {/* ------ Voir Tous ------ */}
            <Route path = '/voirTous-page' element = {<AppAutoMatch/>} />

            {/* <Route path = '/rechercher-model' element = {<App/>} /> */}
            <Route path = '/voirTous-impression' element = {<CarDetails/>} />


    </Routes>
  )
}
