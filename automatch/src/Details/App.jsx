import DetailsHeader from './DetailsHeader'
import cmcLogo from "./images/cmcLogo.png"
import Details from './Details';
import Button from './Button';
import './App.css'
function App() {
  return (
    <div className="App">
      <DetailsHeader src={cmcLogo}/>
      <Details/>

      <div className='navbar f'>
      <Button name='Imprimer PDF(A4)'/>
      <Button name='Imprimer Fiche Compacte '/>
      </div>
    </div>
  );
}

export default App;
