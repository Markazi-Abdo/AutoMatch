import Style from './Style.module.css'
import { Link, useLocation } from 'react-router-dom'
export default function Footer(){
   const currentLocation = useLocation();
   const currentPath = currentLocation.pathname
   const routes = [
    { path: "/", name: "Home" },
    { path: "/", name: "Marque" },
    { path: "/services", name: "Model" },
    { path: "/contact", name: "Details" },
  ];

    return(
        <>
            <div className={Style.Footer}>
                <ul className={Style.ListBtn}>
                    <li><Link to='/'><button className={Style.FooterBtn}>Precedent</button></Link></li>
                    <li><Link ><button className={Style.FooterBtn}>Suivant</button></Link></li>
                </ul>
            </div>
        </>
        
    )
}