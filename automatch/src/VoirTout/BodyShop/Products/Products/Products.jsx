import { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Products({ cars, modelN }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="cars-container">
      {cars.length === 0 ? (
        <span  className="error">Pas de Match</span>
      ) : (
        cars.map((car) => {
          console.log("product" + modelN);
          const filteredModels = modelN
            ? car.models.filter((model) => model.model === modelN)
            : car.models;

          return filteredModels.map((model) => {
            return Object.entries(model.detailsParAnnee).map(
              ([keyAnnee, details]) => {
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
              }
            );
          });
        })
      )}

      {isVisible && (
        <div className="to-top-button">
          <button onClick={scrollToTop} className="upTopButton">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      )}
    </div>
  );
}
