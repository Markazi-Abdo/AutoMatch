import Style from './Style.module.css'
export default function Marque() {
    return (
        <>
        <ul className={Style.MarqueList}>
            <li>
            <div className={Style.cardMarque}>
                <img src="./mercedes.png" alt='mercedes ' />
                <p>mercedes</p>
            </div>
            </li>
            <li>
            <div className={Style.cardMarque}>
                <img src="./BMW.png" alt='BMW ' />
                <p>BMW</p>
            </div>
            </li>
            <li>
            <div className={Style.cardMarque}>
                <img src="./Kia.png" alt='KIA ' />
                <p>Kia</p>
            </div>
            </li>
            <li>
            <div className={Style.cardMarque}>
                <img src="./Toyota.png" alt='Toyota' />
                <p>Toyota</p>
            </div>
            </li>
        </ul>    
        </>

    )
}