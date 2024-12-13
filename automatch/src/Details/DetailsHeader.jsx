import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function DetailsHeader(props) {
  return (
    <div>
    <div className='navbar'>
      <h1>DETAILS</h1>
      <img src={props.src} width={50} />
    </div>
    <hr></hr>
    </div>
  )
}
