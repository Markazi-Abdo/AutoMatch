import './Model.css'
import {useState} from 'react'
export default function Model({cars, modelSelectCherche,modelNotif}){
    const[modelSelectValue, setModelSelectValue]= useState('')
    function handleChange(e){
        setModelSelectValue(e.target.value)
        modelSelectCherche(e.target.value)// e.target.value
        modelNotif(e.target.value)
    }
    return(
        <div className="model-container">
            <h3>Model</h3>
            <select id='model' onChange={handleChange} value={modelSelectValue} >
            <option value="">Model</option>
               {
                cars.map((car)=>{
                    return  car.models.map((model)=>{
                        return <option value={model.model} key={model.model}>{model.model}</option>
                    })
                })
               } 
            </select>

        </div>
    )
}