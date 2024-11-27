import "./style.css";
import Car from "./car";

import Select from '../Print Page/select'
import App from '../Details/App'


export default function CarDetails() {
  return (
    <div className="container-fluid car-details-page row">
      <div className="col-6">
        <div className="col-12"><Car/></div>
        <div className="col-12 text-start  mt-3"><Select/></div>
      </div>
      <div className="col-6 details">
        <App/>
      </div>
    </div>

  );
}
