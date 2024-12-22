import './Product.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
          const isWhite = colorData.code === "#FFFFFF";
          return (
            
             <button className="colorButtons" key={colorName} style={{background:colorData.code, border: isWhite ? "1px solid #000" : "none",}}></button>
            
          );
        })}
        </div>
        <div className="logo">
          <img src={marque.logo} alt="" />
        </div>
      </div>
      <div className="body">
        <h3>{marque.nom} {model.model} {annee}</h3>
        <h2>{details.price } DH</h2>
        <Link to={`/voirTous-impression/${id}/${model.model}/${annee}`}> <button onClick={handleClickDetails}>Plus de details</button></Link>
      </div>
    </div>
  );
}
