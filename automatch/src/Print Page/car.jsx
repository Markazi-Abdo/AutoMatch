import Colors from "./colors"
export default function Car(props){
    console.log(props.img)

    return (
        <div className="all row">
        <img src="./bg-2.jpg" alt="back-img" id="carImage2" className="first-img-filter col-6"/>
    

    <img id="carImage" className="col-12" src={props.img} alt="Voiture"/>
    <div  className="position-relative">
    <p className="prix">{props.data.price}</p>
    <span className="dh">DH</span>
    <span className=" figure"></span></div>
        <Colors/>
</div>

        
    )
}