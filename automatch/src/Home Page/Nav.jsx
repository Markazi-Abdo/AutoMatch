import FullScreen from "../FullScreen"
export default function Nav(){
    return(
                        //BOOTSTRAP 4 !!!
            <div className="d-flex justify-content-between mt-5">


                {/* !!!!------ LOGO CMC ------ !!!!!*/}
                <img src="./cmc-logo.png" alt="cmcLogo" width='70px' />
                
                
                <FullScreen   />


                {/* !!!!!------ HOME ICON ------ !!!!!*/}
                <img src="./home.png" width='40' height='40px' alt="homeIcon"/>



            </div>
            

    )
}