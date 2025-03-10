import { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { div } from "framer-motion/client";

export default function Products({ cars, modelN }) {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const reset = ()=>{ dispatch({type: 'RESET'}) };

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

  const totalCars = cars.reduce((total, car) => {
    const filteredModels = modelN
      ? car.models.filter((model) => model.model === modelN)
      : car.models;

    return (
      total +
      filteredModels.reduce(
        (count, model) => count + Object.keys(model.detailsParAnnee).length,
        0
      )
    );
  }, 0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="cars-container">
      <div className="total-cars">
        <h2>
          {totalCars} voitures
        </h2>
      </div>
      {cars.length === 0 ? (
    <div>
      <span className="error">Pas de Match</span>
      <span className="reset" onClick={reset}>Re-initialiser</span>
    </div>
  ) : (
    cars.map((car) => {
      // Filter models based on the modelN (if provided)
      const filteredModels = modelN
        ? car.models.filter((model) => model.model === modelN)
        : car.models;

      return filteredModels.map((model) => {
        // Loop through all years for the current model
        return Object.entries(model.detailsParAnnee).map(
          ([keyAnnee, details]) => {
            if (!details) return null; // Safeguard in case details are missing

            return (
              <Product
                id={car.id}
                marque={car.marque}
                annee={keyAnnee}
                details={details}
                key={`${car.marque.nom}-${model.model}-${keyAnnee}`}
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
