import  Style from'./style.module.css';
import { Link } from 'react-router-dom';
export default function FooterHome() {
    return (
        <div className={Style.footer}>
            <div className={Style.centerFooter}>
                <div className={Style.contentText}>
                    <div className="d-flex" className={Style.footerSteps}>
                        <p className="m-0">CHOISIR<br />LA MARQUE</p>
                        <img src="./angle-de-la-fleche-droite (1).png" width='40px' alt="Flèche" />
                    </div>
                    <div className="d-flex" className={Style.footerSteps}>
                        <p className="m-0">CHOISIR<br />LE MODÈLE</p>
                        <img src="./angle-de-la-fleche-droite (1).png" alt="Flèche" width='40px' />
                    </div>
                    <div className="" className={Style.footerSteps}>
                        <p className="m-0">FILTRE DE<br />VOTRE CHOIX</p>
                    </div>
                </div>
                <div className={Style.footerButton}>
                   <Link to='/rechercher-marque'> <button className={Style.button +' '+Style.btnShadow}>RECHERCHER</button> </Link> 
                </div>
            </div>
        </div>
    );
}
