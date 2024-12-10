import './Input.css'

export default function Input({inputCherche}){
    const [input, setInput] = useState("")
    function handleCherche(){
        inputCherche(input)
    }
    return(
        <div className="input-container">
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={handleCherche}>CHERCHER</button>
        </div>
    )
}