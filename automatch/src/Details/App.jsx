import DetailsHeader from './DetailsHeader'
import cmcLogo from "./images/cmcLogo.png"

import Button from './Button';
import './App.css'
function App({idMarque,model}) {
  return (
    <div className="App">
      <DetailsHeader src={cmcLogo}/>
      <div className='details'>
        {/* <p>Marque: {idMarque.marque}</p>
        <p>Model: {model.model}</p>
        <p>Annee: </p> */}
        {/* <p>Carburant: {props.anne.carburant}</p>
        <p>Transmission: {props.anne.transmission}</p>
        <p>Puissance: {props.anne.puissance}</p>
        <p>Cylindree{props.anne.cylindree}</p>
        <p>Confort: {props.anne.confort}</p>
        <p>Confortplus: {props.anne.confortp}</p>
        <p>Aides de conduite: {props.anne.aidesconduite}</p>
        <p>Securite: {props.anne.securite}</p>
        <p>Essentel: {props.anne.essentel}</p>
        <p>Type de finition: {props.anne.finition}</p>
        <p>Type de carrosserie: {props.anne.carrosserie}</p>
        <p>Systeme multimedia: {props.anne.multimedia}</p>
        <p>Vitesse: {props.anne.vitesse}</p>
        <p>Nombres de places: {props.anne.places}</p>
        <p>Capacite du coffre: {props.anne.coffre}</p>
        <p>Coleur exterieure: {props.anne.coleurx}</p>
        <p>Coleur interieure: {props.anne.coleuri}</p>
        <p>Autonomie maximale: {props.anne.autonomie}</p> */}
</div>
      <div className='navbar f'>
      <Button name='Imprimer PDF(A4)'/>
      <Button name='Imprimer Fiche Compacte '/>
      </div>
    </div>
  );
}

export default App;
