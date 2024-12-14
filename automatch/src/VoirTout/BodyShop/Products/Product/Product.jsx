import './Product.css'
import { useNavigate } from 'react-router-dom';

export default function Product({ id, marque, annee, details, model }) {
  const firstColorKey = Object.keys(details.colors)[0];
  const firstColorSrc = details.colors[firstColorKey].image;
  const navigate =useNavigate()
  const handleClickDetails = () => {
    navigate('')
  };

  return (
    <div className="card">
      <div className="header">
        <img src={firstColorSrc} alt="Car Image" />
        <div className="color" >
        {Object.entries(details.colors).map(([colorName, colorData]) => {
          return (
            
              <button className={colorName} key={colorName}></button>
            
          );
        })}
        </div>
        <div className="logo">
          <img src="./cmc-logo.png" alt="" />
        </div>
      </div>
      <div className="body">
        <h3>{marque.nom}</h3>
        <h2>{details.price }</h2>
        <button onClick={handleClickDetails}>Plus de details</button>
      </div>
    </div>
  );
}
