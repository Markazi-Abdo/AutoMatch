import './style.css'
import { connect } from 'react-redux';
import { useState } from 'react'
function Car(props){
    const optionToDisplay = props.selectedOption || props.defaultOption;
    const {
        description,
        aidesConduite,
        multimedia,
        prix,
      } = optionToDisplay;
    const [selectedColor,setSelectedColor] = useState('')
    const [selectedImg,setSelectedImg] = useState('')
    console.log(props.img)

    return (
        <div className="all row">
        <img src="/bg-3.jpg" alt="back-img" id="carImage2" className="first-img-filter col-6"/>
    

    <img id="carImage"  className="col-12 car-image" src={selectedImg || Object.values(props.anne.colors)[0].image} alt="Voiture"/>
    <div  className="position-relative">
    <span className="dh">€</span>
    <span className="prix">{prix}</span><br />
    
    <span className="figure"></span></div>
    <div className="colors-label">
        {Object.keys(props.anne.colors || {}).map((color, colorIndex) => (
                                <label onClick={(event)=>{setSelectedColor(event.target.name)
                                    
                                            setSelectedImg(props.anne.colors[color].image)        
                                }}
                                    key={colorIndex}

                                    
                                >
                                    <input type="radio"
                                     name={`${color}`} 
                                     />
                                    <span className="color-option" 
                                    style={{ backgroundColor: props.anne.colors[color].code}}
                                    ></span>
                                </label>

                            ))}
                            {console.log(selectedColor)}
    </div>
</div>

        
    )
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
  
  export default connect(mapStateToProps)(Car);