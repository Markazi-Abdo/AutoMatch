import Nav from "./Nav";
import ContenuHome from "./ContenuHome";
import FooterHome from "./FooterHome";
import  style from'./style.module.css';
export default function HomePage(){
    return(
        <div>
            <div className="container">
                <Nav />
            <div className={style.home} >
                    <ContenuHome />
                    <div className="col-5">
                        <img src="./mechanic (1).png" alt="mechanicImg" />
                    </div>
                </div>
            </div>
            <FooterHome />
        </div>
    )
}