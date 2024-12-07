import Confort from "./Confort/Confort";
import DimensionEspace from "./DimensionsEspace/DimensionEspace";
import Performance from "./Performance/Performance";
import Personnalisation from "./Personnalisation/Personnalisation";
import Technolgie from "./Technologie/Technologie";
import Aides from "./Aides/Aides";
import Securite from './Securite/Securite'
import './Options.css'
import Autonomie from "./Autonomie/Autonomie";
export default function Options(){
    return(
        <div className="options-container">
            <Performance/>
            <DimensionEspace/>
            <Personnalisation/>
            <Technolgie/>
            <Confort/>
            <Aides/>
            <Securite />
            <Autonomie/>
        </div>
    )
}