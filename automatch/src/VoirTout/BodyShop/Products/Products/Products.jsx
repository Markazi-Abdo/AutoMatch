import Product from "../Product/Product";
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Products({ cars }) {
  return (
    <div className="cars-container">
      {cars.map((car) => {
        // Map through models for each car
        return car.models.map((model) => {
          // Map through detailsParAnnee for each model
          return Object.entries(model.detailsParAnnee).map(([keyAnnee, details]) => {
            return (
              <Product
                id={car.id}
                marque={car.marque}
                annee={keyAnnee}
                details={details}
                key={car.marque.nom + model.model + keyAnnee}
              />
            );
          });
        });
      })}

      <div className="to-top-button">
        <button><FontAwesomeIcon icon={faArrowUp} /></button>
      </div>
    </div>
  );
}
