import Style from './Style.module.css';
import { connect } from "react-redux";
import { useState , useEffect } from 'react';
import Footer from './Footer';

function Marque({cars}) {
    /*Stocker id Marque*/
    let [idMarque , setIdMarque] = useState();
        // GetIDMarque(idMarque)
    /*Test des valeurs*/
    useEffect(() =>{
        return console.log(idMarque)
    },[idMarque])

    return (
        <div>
            <ul className={Style.MarqueList} >
                {cars.map((car) => {
                    return (  
                        <li key={car.id} onClick={() => {setIdMarque(car.id)}}>
                            <div className={`${Style.cardMarque} ${idMarque === car.id ? Style.cardMarqueSelected : ''}`}>
                                <img src={car.marque.logo} alt={car.marque.nom} />
                                <p>{car.marque.nom}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>    
            <Footer  idMarque={idMarque}/>
        </div>
    );
}
/*get donnée from Reducer*/
const mapStateToProps = state => {
    return {
        cars: state.cars,
    };
};
export default connect(mapStateToProps)(Marque)