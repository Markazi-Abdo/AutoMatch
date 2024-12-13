import { Route , Routes } from "react-router-dom"
import HomePage from "./Home Page/HomePage"
import App from "./Riyad/App"
import CarDetails from "./Print Page/all"
//import AppAutoMatch from "./AppAutoMatch"
import AppVoirTout from "./VoirTout/AppVoirTout"
import ModelApp from "./Model Page/ModelApp"
import CarDetailsv from "./PrintVoirTout/CarDetailsv"
export default function RoutingManagement({cars, inputCherche, marqueSelectCherche, modelSelectCherche}) {
  return (
    <Routes>


        {/* ------ Home Page ------ */}
        <Route path = '/' element = {<HomePage/>} />


        {/* ------ Rechercher ------ */}

            {/* !!!!!------ Choisir marque ------ !!!!!*/}
            <Route path = '/rechercher-marque' element = {<App/>} />

            {/* !!!!!------ Choisir Model ------ !!!!!*/}
            <Route path = '/modele' element = {<ModelApp/>} />


        {/* ------ Voir Tous ------ */}
            <Route path = '/voirTous-page' element = {<AppVoirTout />} />

            {/* <Route path = '/rechercher-model' element = {<App/>} /> */}
            <Route path = '/voirTous-impression' element = {<CarDetails/>} />
            <Route path="impression" element={<CarDetailsv/>}/>

    </Routes>
  )
}
