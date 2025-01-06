import "./style.css"
export default function Colors(props){
return (
    <div className="colors-label">
        {Object.keys(props.anne.colors || {}).map((color, colorIndex) => (
                                console.log(props.anne.colors[color].code),
                                <label
                                    key={colorIndex}

                                    
                                >
                                    <input type="radio" name="color" />
                                    <span className="color-option" 
                                    style={{ backgroundColor: props.anne.colors[color].code }}
                                    ></span>
                                </label>

                            ))}
    </div>
)
}