import Style from './Style.module.css'
import { Link } from 'react-router-dom'
export default function Footer(){
    return(
        <>
            <div className={Style.Footer}>
                <ul className={Style.ListBtn}>
                    <li><Link to='/acceuil'><button className={Style.FooterBtn}>Precedent</button></Link></li>
                    <li><Link><button className={Style.FooterBtn}>Suivant</button></Link></li>
                </ul>
            </div>
        </>
        
    )
}