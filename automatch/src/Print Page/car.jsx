import Colors from "./colors"
export default function Car(){

    return (
        <div className="all row">
        <img src="./bg-2.jpg" alt="back-img" id="carImage2" className="first-img-filter col-6"/>
    

    <img id="carImage" className="col-12" src="./car-green.png" alt="Voiture"/>
    <div  className="position-relative">
    <p className="prix">11500</p>
    <span className="dh">DH</span>
    <span className=" figure"></span></div>
        <Colors/>
</div>

        
    )
}