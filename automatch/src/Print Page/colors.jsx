import "./style.css"
export default function Colors(){
return (
    <div className="colors-label">
    <label>
            <input type="radio" checked name="color" />
            <span className="color-option color-green"></span>
        </label>
        <label>
            <input type="radio" name="color" />
            <span className="color-option color-blue"></span>
        </label>
        <label>
            <input type="radio" name="color" />
            <span className="color-option color-red"></span>
        </label>
    </div>
)
}