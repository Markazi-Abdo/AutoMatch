import './Product.css'

export default function Product() {
  return (
    <div className="card">
        <div className="header">
          <img src="./mercdesd.png" alt="Car Image" />
          <div className="color">
            <button className='green'></button>
            <button className='blue'></button>
            <button className='brown'></button>
            <button className='black'></button>
          </div>
          <div className="logo">
            <img src="./cmc-logo.png" alt="" />
          </div>
        </div>
        <div className="body">
          <h3>MERCEDES</h3>
          <h2>110 500 DH</h2>
          <button>Plus de details</button>
        </div>
    </div>
  )
}
