import { Route , Routes } from "react-router-dom"
import HomePage from "./Home Page/homePage"
import App from "./Riyad/App"
import CarDetails from "./Print Page/all"
import AppAutoMatch from "./AppAutoMatch"
export default function RoutingManagement() {
  return (
    <Routes>
        {/* ------ Home Page ------ */}
        <Route path = '/acceuil' element = {<HomePage/>} />

        {/* ------ Rechercher ------ */}
        <Route path = '/rechercher-marque' element = {<App/>} />
        {/* <Route path = '/rechercher-model' element = {<App/>} /> */}
        <Route path = '/rechercher-impression' element = {<CarDetails/>} />

        {/* ------ Voir Tous ------ */}
        <Route path = '/voirTous-page' element = {<AppAutoMatch/>} />
        {/* <Route path = '/rechercher-model' element = {<App/>} /> */}
        <Route path = '/voirTous-impression' element = {<CarDetails/>} />
    </Routes>
  )
}
