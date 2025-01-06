// import DetailsHeader from './DetailsHeader'
// import cmcLogo from "./images/cmcLogo.png"
// import BtnStyle from './Button.module.css'
// import './App.css'
// function App(props) {
//   const contentPage = <div>
//             <p>Marque: {props.idMarque.marque.nom}</p>
//         <p>Model: {props.model.model}</p>
//         <p>Annee: {props.selectedAnne}</p>
//         <p>Carburant: {props.anne.carburant}</p>
//         <p>Transmission: {props.anne.transmission}</p>
//         <p>Puissance: {props.anne.puissance}</p>
//         <p>Cylindree{props.anne.cylindree}</p>
//         <p>Confort Description: {props.anne.optionsConfort.standard.description}</p>
//         <p>Confort Aides des Conduite: {props.anne.optionsConfort.standard.aidesconduite}</p>
//         <p>Confort Multimedia: {props.anne.optionsConfort.standard.multimedia}</p>
//         <p>Confort Prix: {props.anne.optionsConfort.standard.prix}</p>
//         <p>Aides de conduite: {props.anne.aidesconduite}</p>
//         <p>Type de carrosserie: {props.anne.carrosserie}</p>
//         <p>Vitesse: {props.anne.vitesse}</p>
//         <p>Nombres de places: {props.anne.places}</p>
//         <p>Capacite du coffre: {props.anne.coffre}</p>
//         <p>Coleur exterieure: {props.color}</p>
//         <p>Autonomie maximale: {props.anne.autonomie}</p>
//   </div>
//    const handlePrint = () => {
//     const printWindow = window.open("", "_blank", "width=300,height=500");
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Print</title>
//           <style>
//             @media print {
//               body {
//                 margin: 0;
//                 padding: 0;
//                 font-size: 12px;
//                 width: 58mm;
//               }
//               .details {
//                 margin: 10px;
//               }
//             }
//           </style>
//         </head>
//         <body>
//           <div class="printable">
//             <img
//               src="${cmcLogo}"
//               alt="Logo"
//               style="width: 100%; max-height: 50px;"
//             />
//               <div>
//             <p>Marque: ${props.idMarque.marque.nom}</p>
//         <p>Model: ${props.model.model}</p>
//         <p>Annee: ${props.selectedAnne}</p>
//         <p>Carburant: ${props.anne.carburant}</p>
//         <p>Transmission: ${props.anne.transmission}</p>
//         <p>Puissance: ${props.anne.puissance}</p>
//         <p>Cylindree: ${props.anne.cylindree}</p>
//         <p>Confort Description: ${props.anne.optionsConfort.standard.description}</p>
//         <p>Confort Aides des Conduite: ${props.anne.optionsConfort.standard.aidesconduite}</p>
//         <p>Confort Multimedia: ${props.anne.optionsConfort.standard.multimedia}</p>
//         <p>Confort Prix: ${props.anne.optionsConfort.standard.prix}</p>
//         <p>Aides de conduite: ${props.anne.aidesconduite}</p>
//         <p>Type de carrosserie: ${props.anne.carrosserie}</p>
//         <p>Vitesse: ${props.anne.vitesse}</p>
//         <p>Nombres de places: ${props.anne.places}</p>
//         <p>Capacite du coffre: ${props.anne.coffre}</p>
//         <p>Coleur exterieure: ${props.color}</p>
//         <p>Autonomie maximale: ${props.anne.autonomie}</p>
//   </div>
  
//           </div>
//                   <script>
//           window.onload = function() {
//             window.print();
//           };
//         </script>
//         </body>
//       </html>
//     `);

//     // Close the print window after the print dialog is closed
//     printWindow.document.close();
//     printWindow.focus();
//     printWindow.print();
//     printWindow.close();
//   };
//   return (
//     <div className="App">
//       <DetailsHeader src={cmcLogo}  />
//       <div className='details'>
//         {/* <p>Marque: {props.idMarque.marque.nom}</p>
//         <p>Model: {props.model.model}</p>
//         <p>Annee: {props.selectedAnne}</p>
//         <p>Carburant: {props.anne.carburant}</p>
//         <p>Transmission: {props.anne.transmission}</p>
//         <p>Puissance: {props.anne.puissance}</p>
//         <p>Cylindree{props.anne.cylindree}</p>
//         <p>Confort Description: {props.anne.optionsConfort.standard.description}</p>
//         <p>Confort Aides des Conduite: {props.anne.optionsConfort.standard.aidesconduite}</p>
//         <p>Confort Multimedia: {props.anne.optionsConfort.standard.multimedia}</p>
//         <p>Confort Prix: {props.anne.optionsConfort.standard.prix}</p>
//         <p>Aides de conduite: {props.anne.aidesconduite}</p>
//         <p>Type de carrosserie: {props.anne.carrosserie}</p>
//         <p>Vitesse: {props.anne.vitesse}</p>
//         <p>Nombres de places: {props.anne.places}</p>
//         <p>Capacite du coffre: {props.anne.coffre}</p>
//         <p>Coleur exterieure: {props.color}</p>
//         <p>Autonomie maximale: {props.anne.autonomie}</p> */}
//         {contentPage}
// </div>
// <div className={BtnStyle.btnGrpPrint}>
//         <button className={BtnStyle.buttonPrint}  >Imprimer PDF(A4)</button>
//         <button className={BtnStyle.buttonPrint} onClick={handlePrint} >Imprimer Fiche Compacte</button>
//     </div>
//     </div>
//   );
// }

// export default App;

import DetailsHeader from './DetailsHeader';
import cmcLogo from './images/cmcLogo.png';
import BtnStyle from './Button.module.css';
import './App.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
function App(props) {
  const optionToDisplay = props.selectedOption || props.defaultOption;


  // Déstructuration des propriétés nécessaires de l'option sélectionnée
  const {
    description,
    aidesConduite,
    multimedia,
    prix,
  } = optionToDisplay;


  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const handleFinish = () => {
    const isConfirmed = window.confirm('Vous êtes sûr ?');
    if (isConfirmed) {
      navigate('/acceuil'); 
    }
  }
  // test 
  useEffect(()=>{
     console.log(time) 
  },[time])

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const timeString = `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
      setTime(timeString);
    }, 1000);
    return () => clearInterval(interval);
  }, []); 
  const handleSmallPrint = () => {
    const printWindow = window.open('', '_blank', 'width=300,height=500');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Compact Print</title>
        <style>
          @media print {
            @page {
              size: 80mm 210mm;
              margin: 0;
              pading:5px;
            }

            body {
              font-size: 18px; 
              width: 420px; 
              pading:10px;
              margin: 0;
              box-sizing: border-box;
              overflow: hidden; 
              transform: scale(0.7); 
              transform-origin: top left;
            }

            .details {
              margin: 2mm; 
            }

            .details p {
              margin: 2px 0;
              line-height: 1em;

            }



            .time {
              text-align: left;
              font-size: 18px;
              margin-top: 1mm;
              margin-left:15px;
            }

            h1 {
              font-size:24 px;
              text-align: left;
              margin-left:15px;
            }
.merci {
       
              text-align: left;
            }
              

          }

            .details {
              margin: 2mm; 
            }

            .details p {
              margin: 2px 0;
              line-height: 1em;
            }

            .header {
              display: flex;
              gap:50px;
              justify-content:center;
              width:100%;
              margin-top: 2mm;
            }

            .time {
              text-align: left;
              font-size: 12px;
              letter-spacing:4px;
              margin-top: 1mm;
              margin-left:20px;
            }

            h1 {
              font-size: 24px;
              text-align: center;

            }
            td{
            text-align:left;
            }
            th{
            text-align:left;
            }
.merci {
       
              text-align: left;
               margin-left:15px;
            }
               body{
                  width:250px;
            }
                  .pricePrint2{
                  
            }
                       .itemPrint{
                  font-size:18px;
            }
                              .details p {
              display:flex;
              justify-content:space-between;
              
            }
              .details p strong{
              width:70%;
            }


        </style>
      </head>
      <body>
        <div class="printable">
          <div class='header'>
            <img src="/Black & White 1@4x.png" alt="Logo" width='50px' height='50px' />
            <img src="${props.idMarque.marque.logo}" alt="Logo" width='50px' />
          </div>
          <h1>Voiture Detail</h1>
          
          <div class="details">
           <div class='time'>
            <p>${time}</p>
          </div>
          <span>---------------------------------------</span>
            <table>
        <tr>
            <th>Marque:</th>
            <td>${props.idMarque.marque.nom}</span></td>
        </tr>
        <tr>
            <th>Model:</th>
            <td>${props.model.model}</td>
        </tr>
        <tr>
            <th>Annee:</th>
            <td>${props.selectedAnne}</td>
        </tr>
        <tr>
            <th>Carburant:</th>
            <td>${props.anne.carburant}</td>
        </tr>
        <tr>
            <th>Transmission:</th>
            <td>${props.anne.transmission}</td>
        </tr>
        <tr>
            <th>Puissance:</th>
            <td>${props.anne.puissance}</td>
        </tr>
        <tr>
            <th>Cylindree:</th>
            <td>${props.anne.cylindree}</td>
        </tr>
        <tr>
            <th>Description:</th>
            <td>${description}</td>
        </tr>
        <tr>
            <th>Aides des Conduite:</th>
            <td>${aidesConduite.join(", ")}</td>
        </tr>
        <tr>
            <th>Multimedia:</th>
            <td>${multimedia}</td>
        </tr>
        <tr>
            <th>Type de carrosserie:</th>
            <td>${props.anne.carrosserie}</td>
        </tr>
        <tr>
            <th>Vitesse:</th>
            <td>${props.anne.vitesse}</td>
        </tr>
        <tr>
            <th>Nombres de places:</th>
            <td>${props.anne.places}</td>
        </tr>
        <tr>
            <th>Capacite du coffre:</th>
            <td>${props.anne.coffre}</td>
        </tr>
        <tr>
            <th>Coleur exterieure:</th>
            <td>${props.color}</td>
        </tr>
        <tr>
            <th>Autonomie maximale:</th>
            <td>${props.anne.autonomie}</td>
        </tr>
        <tr>

            <td colspan="2">--------------------------------------</td>
        </tr>
        <tr class='pricePrint2'>
            <th>Prix:</th>
            <td>${prix} DH</td>
        </tr>
    </table>
          </div>
          
         
          <div class='merci'>
          <h3>Merci Pour Votre Visite</h3>
          </div>
          
        </div>
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          };
        </script>
      </body>
      </html>
    `);
console.log(time)
    printWindow.document.close(); // Close the document
    printWindow.focus(); // Focus on the print window
  };

  return (
    <div className="App">
      
     
      <DetailsHeader src={cmcLogo} />
      <div className="details">
        <p>Marque: {props.idMarque.marque.nom}</p>
        <p>Model: {props.model.model}</p>
        <p>Annee: {props.selectedAnne}</p>
        <p>Carburant: {props.anne.carburant}</p>
        <p>Transmission: {props.anne.transmission}</p>
        <p>Puissance: {props.anne.puissance}</p>
        <p>Cylindree: {props.anne.cylindree}</p>
        <p>Type de carrosserie: {props.anne.carrosserie}</p>
        <p>Vitesse: {props.anne.vitesse}</p>
        <p>Nombres de places: {props.anne.places}</p>
        <p>Capacite du coffre: {props.anne.coffre}</p>
        <p>Autonomie maximale: {props.anne.autonomie}</p>
        <p>Coleur exterieure: {props.color}</p>
        <p>Confort Description: {description}</p>
        <p>Confort Aides des Conduite: {aidesConduite.join(", ")}</p>
        <p>Confort Multimedia: {multimedia}</p>
        <br />
        <hr />
        <p style={{fontWeight:'bold',fontSize:'20px'}}><strong>Prix:</strong> <span style={{color:'#ff8e2b'}}>{prix} DH</span></p>
      </div>
      <div className={BtnStyle.btnGrpPrint}>
        {/* <button className={BtnStyle.buttonPrint}>Imprimer PDF (A4)</button> */}
        <button className={BtnStyle.buttonPrint} onClick={handleSmallPrint}> 
          Imprimer Fiche Compacte
        </button>
        <button className={BtnStyle.buttonFinish} onClick={handleFinish} >Finish</button>
      </div>

    </div>
  );
}

// Récupérer l'option sélectionnée depuis l'état Redux
const mapStateToProps = (state) => ({
  selectedOption: state.selectedOption,
  defaultOption: {
    description: "",
    aidesConduite: ["", ""],
    multimedia: "",
    prix: "",
  },
});

export default connect(mapStateToProps)(App);
