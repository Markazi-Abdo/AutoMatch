import  Style from'./style.module.css';
import { Link } from 'react-router-dom';
export default function ContenuHome(){
    return(
                <div className="col-7 mt-5 ${Style.contenu}">
                    <h1>
                        AUTO<br/>MATCH
                    </h1>
                    <h6>
                        TROUVER VOTRE VOITURE FACILEMENT
                    </h6>
                   <Link to='/voirTous-page'> <button className={Style.button}>VOIR TOUS</button> </Link>
                </div>

    )
}