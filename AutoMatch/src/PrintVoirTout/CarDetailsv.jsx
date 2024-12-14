import "../Print Page/style.css";
import Car from "../Print Page/car";
import App from '../Details/App'
import Content from "./Content";
import './styleDet.css'

export default function CarDetailsv() {

  return (
    <div className="container-fluid car-details-page row">
      <div className="col-6">
        <div className="col-12"><Car/></div>
        <div className="col-12 text-start  mt-3"><Content /></div>
      </div>
      <div className="col-6 details">
        <App/>
      </div>
    </div>

  );
}
