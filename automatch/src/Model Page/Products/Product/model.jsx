// import styles from './Product.module.css';
// import { useState } from 'react';
// export default function Product(props) {
//   const [models,setModels] = useState()

//   props.data.map((item)=>{return(
//         setModels(
//           {
//             model : item.model,
//             detailsParAnnee : [item.detailsParAnnee]
//           }
//         )
//   )})
//   return (
//     <div className={styles.card}>
//       <div className={styles.header}>
//         <img src='' alt="Car Image" />
//         <div className={styles.color}>
//           <button className={styles.green}></button>
//           <button className={styles.blue}></button>
//           <button className={styles.brown}></button>
//           <button className={styles.black}></button>
//         </div>
//         <div className={styles.logo}>
//           <img src="./cmc-logo.png" alt="" />
//         </div>
//       </div>
//       <div className={styles.body}>
//         <h5>{models.model}</h5>
//         <h6>110 500 DH</h6>
//       </div>
//     </div>
//   );
// }
import styles from './Product.module.css';
import FooterModel from '../../Footer';
import { useState, useEffect } from 'react';

export default function Model({id, data, marqueImg }) {

    const { model, detailsParAnnee } = data; // Destructure model and detailsParAnnee

    const [annéeSelected, setAnnéeSelected] = useState(null);
    const [modelSelected, setModelSelected] = useState(model);
    
    


    //test Values
    useEffect(() => {
        console.log(annéeSelected)
        console.log(modelSelected) 
    }, [annéeSelected, modelSelected])


    return (
        <>
            {/*Object.entries(detailsParAnnee) return an array of key-value*/}
            {Object.entries(detailsParAnnee).map(([year, details], index) => (
                <div key={index} className={styles.card} onClick={() => {
                    setModelSelected(model);
                    setAnnéeSelected(year)
                }}>
                    <div className={styles.header} >
                        <img src={Object.values(details.colors)[0].image} alt={`${model} Image`} /> {/* Replace with actual image if available */}
                        <div className={styles.logo}>
                            <img src={marqueImg} alt="Car Logo" />
                        </div>
                    </div>
                    <div className={styles.body}>
                        <h5>{model}</h5> {/* Display model name */}
                        <h6>{year}</h6> {/* Display the year */}
                        <p>Price: {details.price}</p> {/* Display the price */}

                        {/* Dynamic colors */}
                        <div className={styles.color}>
                            {Object.keys(details.colors || {}).map((color, colorIndex) => (
                                console.log(details.colors[color].code),
                                <button
                                    key={colorIndex}
                                    className={styles[color]}
                                    style={{ backgroundColor: details.colors[color].code }}
                                ></button>

                            ))}
                        </div>
                    </div>
                </div>
            ))}
            {/* <FooterModel annéeSelected= {annéeSelected} modelSelected={modelSelected} /> */}
            {annéeSelected && modelSelected && (
    <FooterModel annéeSelected={annéeSelected} id={id} modelSelected={modelSelected} />
)}
        </>
    );
}
