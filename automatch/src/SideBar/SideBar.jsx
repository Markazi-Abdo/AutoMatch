import CarbTrans from "./CarbTrans/CarbTransComponent";
import Options from "./Options/Options";
import Price from "./Price/Price";

import './SideBar.css'

export default function SideBar(){
    return(
        <div className="sidebar-container">
            <div className="titles">
                <h3>Filters</h3>
                <h4>Reset All</h4>
            </div>
            <div className="components">
                <h3>Fourchettes de prix</h3>
                <Price/>
                <CarbTrans/>
                <Options/>
            </div>
        </div>
    )
}