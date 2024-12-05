import './style.css';
import { Link } from 'react-router-dom';
export default function FooterHome() {
    return (
        <div className="footer">
            <div className="centerFooter">
                <div className="contentText">
                    <div className="footer-step d-flex">
                        <p className="m-0">CHOISIR<br />LA MARQUE</p>
                        <img src="./angle-de-la-fleche-droite (1).png" alt="Flèche" />
                    </div>
                    <div className="footer-step d-flex">
                        <p className="m-0">CHOISIR<br />LE MODÈLE</p>
                        <img src="./angle-de-la-fleche-droite (1).png" alt="Flèche" />
                    </div>
                    <div className="footer-step">
                        <p className="m-0">FILTRE DE<br />VOTRE CHOIX</p>
                    </div>
                </div>
                <div className="footer-button">
                   <Link to='/rechercher-marque'> <button className="button btnShadow">RECHERCHER</button> </Link> 
                </div>
            </div>
        </div>
    );
}
