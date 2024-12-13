import "./style.css";
import Car from "./car";
import Select from '../Print Page/select'
import App from '../Details/App'
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function CarDetails({ cars }) {
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
    
    <div className="container-fluid car-details-page row">
      <div className="col-6">
        <div className="col-12"><Car data={selectedAnne} img={Object.values(selectedAnne.colors)[0].image} /></div>
        <div className="col-12 text-start  mt-3"><Select/></div>
      </div>
      <div className="col-6 details">
        <App idMarque={car} model={selectedModel} anne={selectedAnne} />
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