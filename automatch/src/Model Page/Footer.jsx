import Style from './Style.module.css'
import { Link } from 'react-router-dom'
export default function FooterModel({id,modelSelected,annéeSelected}) {


    return (
        <>

            <div className={Style.Footer}>
                <ul className={Style.ListBtn}>
                    <li><Link to='/rechercher-marque'><button className={Style.FooterBtn}>Precedent</button></Link></li>
                    {!annéeSelected ?'':<li><Link to={`/rechercher-impression/${id}/${modelSelected}/${annéeSelected}`}>
                        <button className={Style.FooterBtn}>Suivant</button>
                    </Link>
                    </li>}
                </ul>
            </div>
        </>

    )
}
