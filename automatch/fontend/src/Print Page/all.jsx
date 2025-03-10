import "./style.css";
import { useState } from "react";
import App from '../Details/App'
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import OptionsConfort from './select'
function CarDetails({ cars }) {
  const [selectedColor,setSelectedColor] = useState('')
  const [selectedImg,setSelectedImg] = useState('')
  const { id,model,anne } = useParams();
  const car = cars.find((item) => item.id == id);

  // Find the specific model
  const selectedModel = car.models.find((item) => item.model === model);
  
  // Find the details for the specific year (anne)
  const selectedAnne = selectedModel.detailsParAnnee[anne];
  
  if (!selectedAnne) {
      console.error("Year not found");
  }
  
  // test
  console.log("Car:", car);
  console.log("Selected Model:", selectedModel);
  console.log("Selected Year Details:", selectedAnne);
  return (
    
    <div className="all container-fluid car-details-page row">
      <div className="col-6">
        <div className="col-12">
          {/* <Car anne={selectedAnne} data={selectedAnne} img={selectedAnne} /> */}
          <div className=" row">
        <img src="/bg.jpg" alt="back-img" id="carImage2" className="first-img-filter col-6"/>
    

    <img id="carImage"  className="col-12 car-image" src={selectedImg || Object.values(selectedAnne.colors)[0].image} alt="Voiture"/>
    {/* <div  className="position-relative">
    <span className="dh">€</span>
    <span className="prix">{selectedAnne.price}</span><br />
    
    <span className="figure"></span></div> */}
    <div className="colors-label">
        {Object.keys(selectedAnne.colors || {}).map((color, colorIndex) => (
                                <label onClick={(event)=>{setSelectedColor(event.target.value)
                                    
                                            setSelectedImg(selectedAnne.colors[color].image)        
                                }}
                                    key={colorIndex}

                                    
                                >
                                    <input type="radio"
                                     value={`${color}`} 
                                     name="color"
                                     />
                                    <span className="color-option" 
                                    style={{ backgroundColor: selectedAnne.colors[color].code }}
                                    ></span>
                                </label>

                            ))}
                            {console.log(selectedColor)}
    </div>
    <OptionsConfort />
</div>
        </div>
      </div>
      <div className="col-6 details">
        <App selectedAnne={anne} color={selectedColor} idMarque={car} model={selectedModel} anne={selectedAnne} />
      </div>
      <div>
        
      </div>
    </div>

  );
}
const mapStateToProps = (state) => {
  return {
      cars: state.cars,
  };
};


export default connect(mapStateToProps)(CarDetails)