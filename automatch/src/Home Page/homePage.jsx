import Nav from "./nav";
import ContenuHome from "./contenuHome";
import FooterHome from "./footerHome";

export default function HomePage(){
    return(
        <div>
            <div className="container">
                <Nav />
                <div className="contenu row">
                    <ContenuHome />
                    <div className="col-5">
                        <img src="./mechanic (1).png" alt="mechanicImg" width="550px" />
                    </div>
                </div>
            </div>
            <FooterHome />
        </div>
    )
}