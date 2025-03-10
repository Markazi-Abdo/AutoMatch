import React from 'react'

export default function Details({marque, model, annee, carburant,
     transmission, puissance, cylindree, confort, confortp,
      aidesconduite, securite, essentel, finition, carrosserie,
      multimedia, vitesse, places, coffre, coleurx, coleuri,
       autonomie}) {
 
        return (
    <div className='details'>
        <p>Marque: {marque}</p>
        <p>Model: {model}</p>
        <p>Annee: {annee}</p>
        <p>Carburant: {carburant}</p>
        <p>Transmission: {transmission}</p>
        <p>Puissance: {puissance}</p>
        <p>Cylindree{cylindree}</p>
        <p>Confort: {confort}</p>
        <p>Confortplus: {confortp}</p>
        <p>Aides de conduite: {aidesconduite}</p>
        <p>Securite: {securite}</p>
        <p>Essentel: {essentel}</p>
        <p>Type de finition: {finition}</p>
        <p>Type de carrosserie: {carrosserie}</p>
        <p>Systeme multimedia: {multimedia}</p>
        <p>Vitesse: {vitesse}</p>
        <p>Nombres de places: {places}</p>
        <p>Capacite du coffre: {coffre}</p>
        <p>Coleur exterieure: {coleurx}</p>
        <p>Coleur interieure: {coleuri}</p>
        <p>Autonomie maximale: {autonomie}</p>
    </div>
  )
}
