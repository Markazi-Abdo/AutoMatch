import Product from "../Product/Product";
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

/*export default function Products({ cars, modelNotif }) {
  return (
    <div className="cars-container">
        {cars.length==0?<p style={{textAlign:'center'}}>Pas de Match</p>:cars.map((car) => {
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
                model={model}
              />
            );
          });
        });
      })}*///not correct - model filtering not included
      export default function Products({ cars, modelN }) {
  return (
    <div className="cars-container">
      {cars.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Pas de Match</p>
      ) : (
        cars.map((car) => {
          // Filter models based on modelNotif
          console.log('product'+modelN)
          const filteredModels = modelN? car.models.filter((model) => model.model === modelN): car.models;

          return filteredModels.map((model) => {
            // Map through detailsParAnnee for each model
            return Object.entries(model.detailsParAnnee).map(([keyAnnee, details]) => {
              return (
                <Product
                  id={car.id}
                  marque={car.marque}
                  annee={keyAnnee}
                  details={details}
                  key={car.marque.nom + model.model + keyAnnee}
                  model={model}
                />
              );
            });
          });
        })
      )}
      <div className="to-top-button">
        <button><FontAwesomeIcon icon={faArrowUp} /></button>
      </div>
    </div>
  );
}
