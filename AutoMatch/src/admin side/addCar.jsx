import React, { useState } from 'react';
import styles from './style.module.css';

const AddCarForm = () => {
  const [colors, setColors] = useState([]); // État pour stocker les couleurs sélectionnées
  const [images, setImages] = useState([]); // État pour stocker les images sélectionnées

  // Fonction pour ajouter une couleur à la liste
  const handleAddColor = (e) => {
    e.preventDefault();
    const newColor = e.target.color.value;
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor]);
    }
    e.target.reset(); // Réinitialiser le champ après ajout
  };

  // Fonction pour supprimer une couleur de la liste
  const handleRemoveColor = (colorToRemove) => {
    setColors(colors.filter((color) => color !== colorToRemove));
  };

  // Fonction pour ajouter une image à la liste
  const handleAddImage = (e) => {
    e.preventDefault();
    const newImage = e.target.image.files[0];
    if (newImage) {
      setImages([...images, URL.createObjectURL(newImage)]);
    }
    e.target.reset(); // Réinitialiser le champ après ajout
  };

  // Fonction pour supprimer une image de la liste
  const handleRemoveImage = (imageToRemove) => {
    setImages(images.filter((image) => image !== imageToRemove));
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.dashboardTitle}>Tableau de Bord d'Administration</h1>
      <div className={styles.formContainer}>
        <h2 className={styles.sectionTitle}>Ajouter une Voiture</h2>
        <form className={styles.form}>
          {/* Marque */}
          <div className={styles.formGroup}>
            <label htmlFor="marque" className={styles.label}>Marque</label>
            <select id="marque" name="marque" className={styles.select}>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Kia">Kia</option>
            </select>
          </div>

          {/* Modèle */}
          <div className={styles.formGroup}>
            <label htmlFor="model" className={styles.label}>Modèle</label>
            <input type="text" id="model" name="model" className={styles.input} />
          </div>

          {/* Année */}
          <div className={styles.formGroup}>
            <label htmlFor="annee" className={styles.label}>Année</label>
            <select id="annee" name="annee" className={styles.select}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          {/* Carburant */}
          <div className={styles.formGroup}>
            <label htmlFor="carburant" className={styles.label}>Carburant</label>
            <select id="carburant" name="carburant" className={styles.select}>
              <option value="Essence">Essence</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybride">Hybride</option>
            </select>
          </div>

          {/* Transmission */}
          <div className={styles.formGroup}>
            <label htmlFor="transmission" className={styles.label}>Transmission</label>
            <select id="transmission" name="transmission" className={styles.select}>
              <option value="Manuelle">Manuelle</option>
              <option value="Automatique">Automatique</option>
            </select>
          </div>

          {/* Puissance (ch) */}
          <div className={styles.formGroup}>
            <label htmlFor="puissance" className={styles.label}>Puissance (ch)</label>
            <input type="number" id="puissance" name="puissance" className={styles.input} />
          </div>

          {/* Cylindrée (cm³) */}
          <div className={styles.formGroup}>
            <label htmlFor="cylindree" className={styles.label}>Cylindrée (cm³)</label>
            <input type="number" id="cylindree" name="cylindree" className={styles.input} />
          </div>

          {/* Type de carrosserie */}
          <div className={styles.formGroup}>
            <label htmlFor="carrosserie" className={styles.label}>Type de carrosserie</label>
            <select id="carrosserie" name="carrosserie" className={styles.select}>
              <option value="Berline">Berline</option>
              <option value="SUV">SUV</option>
              <option value="Coupé">Coupé</option>
              <option value="Cabriolet">Cabriolet</option>
              <option value="Break">Break</option>
              <option value="Monospace">Monospace</option>
              <option value="Pick-up">Pick-up</option>
            </select>
          </div>

          {/* Vitesse (km/h) */}
          <div className={styles.formGroup}>
            <label htmlFor="vitesse" className={styles.label}>Vitesse maximale (km/h)</label>
            <input type="number" id="vitesse" name="vitesse" className={styles.input} />
          </div>

          {/* Nombre de places */}
          <div className={styles.formGroup}>
            <label htmlFor="places" className={styles.label}>Nombre de places</label>
            <input type="number" id="places" name="places" className={styles.input} />
          </div>

          {/* Capacité du coffre (L) */}
          <div className={styles.formGroup}>
            <label htmlFor="coffre" className={styles.label}>Capacité du coffre (L)</label>
            <input type="number" id="coffre" name="coffre" className={styles.input} />
          </div>

          {/* Autonomie maximale (Km) */}
          <div className={styles.formGroup}>
            <label htmlFor="autonomie" className={styles.label}>Autonomie maximale (Km)</label>
            <input type="number" id="autonomie" name="autonomie" className={styles.input} />
          </div>

          {/* Couleurs */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Couleurs</label>
            <form onSubmit={handleAddColor} className={styles.colorForm}>
              <input type="color" id="color" name="color" className={styles.colorInput} />
              <button type="submit" className={styles.addColorButton}>Ajouter une couleur</button>
            </form>
            <div className={styles.colorList}>
              {colors.map((color, index) => (
                <div key={index} className={styles.colorItem}>
                  <span
                    className={styles.colorPreview}
                    style={{ backgroundColor: color }}
                  ></span>
                  <span className={styles.colorValue}>{color}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveColor(color)}
                    className={styles.removeColorButton}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Images</label>
            <form onSubmit={handleAddImage} className={styles.imageForm}>
              <input type="file" id="image" name="image" accept="image/*" className={styles.imageInput} />
              <button type="submit" className={styles.addImageButton}>Ajouter une image</button>
            </form>
            <div className={styles.imageList}>
              {images.map((image, index) => (
                <div key={index} className={styles.imageItem}>
                  <img src={image} alt={`Voiture ${index + 1}`} className={styles.imagePreview} />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(image)}
                    className={styles.removeImageButton}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Options de Confort */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Options de Confort</label>
            <div className={styles.comfortOptions}>
              {/* Option Standard */}
              <div className={styles.comfortOptionCard}>
                <h3 className={styles.comfortOptionTitle}>Standard</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="standardDescription">Description</label>
                  <input type="text" id="standardDescription" name="standardDescription" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="standardAides">Aides à la conduite</label>
                  <input type="text" id="standardAides" name="standardAides" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="standardMultimedia">Multimédia</label>
                  <input type="text" id="standardMultimedia" name="standardMultimedia" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="standardPrix">Prix</label>
                  <input type="text" id="standardPrix" name="standardPrix" className={styles.input} />
                </div>
              </div>

              {/* Option Full Option */}
              <div className={styles.comfortOptionCard}>
                <h3 className={styles.comfortOptionTitle}>Full Option</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="fullOptionDescription">Description</label>
                  <input type="text" id="fullOptionDescription" name="fullOptionDescription" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="fullOptionAides">Aides à la conduite</label>
                  <input type="text" id="fullOptionAides" name="fullOptionAides" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="fullOptionMultimedia">Multimédia</label>
                  <input type="text" id="fullOptionMultimedia" name="fullOptionMultimedia" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="fullOptionPrix">Prix</label>
                  <input type="text" id="fullOptionPrix" name="fullOptionPrix" className={styles.input} />
                </div>
              </div>

              {/* Option Luxe */}
              <div className={styles.comfortOptionCard}>
                <h3 className={styles.comfortOptionTitle}>Luxe</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="luxeDescription">Description</label>
                  <input type="text" id="luxeDescription" name="luxeDescription" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="luxeAides">Aides à la conduite</label>
                  <input type="text" id="luxeAides" name="luxeAides" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="luxeMultimedia">Multimédia</label>
                  <input type="text" id="luxeMultimedia" name="luxeMultimedia" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="luxePrix">Prix</label>
                  <input type="text" id="luxePrix" name="luxePrix" className={styles.input} />
                </div>
              </div>
            </div>
          </div>

          {/* Bouton de soumission */}
          <button type="submit" className={styles.submitButton}>Ajouter la Voiture</button>
        </form>
      </div>
    </div>
  );
};

export default AddCarForm;