import './Product.css'

export default function Product({ id, marque, annee, details }) {
  const firstColorKey = Object.keys(details.colors)[0];
  const firstColorSrc = details.colors[firstColorKey].image;

  const handleClickDetails = () => {
    // Handle click for more details here
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
        <h2>{details.price + ' DH'}</h2>
        <button onClick={handleClickDetails}>Plus de details</button>
      </div>
    </div>
  );
}
