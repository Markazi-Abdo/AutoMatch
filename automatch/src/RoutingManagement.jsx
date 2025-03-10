import { Route , Routes } from "react-router-dom"
import HomePage from "./Home Page/HomePage"
import App from "./Riyad/App"
import CarDetails from "./Print Page/all"
import AddCarForm from "./admin side/addCar"
//import AppAutoMatch from "./AppAutoMatch"
import AppVoirTout from "./VoirTout/AppVoirTout"
import ModelApp from "./Model Page/ModelApp"
export default function RoutingManagement({cars, inputCherche, marqueSelectCherche, modelSelectCherche}) {
  return (
    <Routes>


        {/* ------ Home Page ------ */}
        <Route path = '/acceuil' element = {<HomePage/>} />


        {/* ------ Admin ------ */}
        <Route path = '/admin' element = {<AddCarForm/>} />

        {/* ------ Rechercher ------ */}

            {/* !!!!!------ Choisir marque ------ !!!!!*/}
            <Route path = '/rechercher-marque' element = {<App/>} />

            {/* !!!!!------ Choisir Model ------ !!!!!*/}
            <Route path = '/modele/:id' element = {<ModelApp/>} />
            <Route path = '/rechercher-impression/:id/:model/:anne' element = {<CarDetails/>} />

        {/* ------ Voir Tous ------ */}
            <Route path = '/voirTous-page' element = {<AppVoirTout />} />

            {/* <Route path = '/rechercher-model' element = {<App/>} /> */}
            <Route path = '/voirTous-impression/:id/:model/:anne' element = {<CarDetails/>} />
            


    </Routes>
  )
}
