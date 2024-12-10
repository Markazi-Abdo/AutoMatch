import './Product.css'

export default function Product({modelAnnee}) {
  const color = Object.keys(modelAnnee.colors)[0]
  const src = modelAnnee.colors[color].image
    return (
    <div className="card">
        <div className="header">
          <img src={src} alt="Car Image" />
          <div className="color">
            {Object.keys(modelAnnee.colors).map((colorName)=>{
                          <button className={colorName}></button>
            })}

          </div>
          <div className="logo">
            <img src="./cmc-logo.png" alt="" />
          </div>
        </div>
        <div className="body">
          <h3>{MERCEDES}</h3>
          <h2>{110 500 DH}</h2>
          <button>Plus de details</button>
        </div>
    </div>
  )
}
