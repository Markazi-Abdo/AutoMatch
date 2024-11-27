import Bande from "./Bande";
import Footer from "./Footer";
import Model from './Model';
import NavBar  from './NavBar';


export default function App(){
    return(
        <div className="">
            <NavBar/>
            <Bande/>
            <br></br>
            <Model/>
            <Footer/>
        </div>
    )
}