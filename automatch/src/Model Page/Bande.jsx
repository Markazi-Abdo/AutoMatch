import Style from './Style.module.css'
export default function Bande() {
    return (
        <>
            <div className={Style.Bande}>
                <ul className={Style.ListBande}>
                    
                    <li>Choix de Marque</li>
                    <li><span></span>Choix de Model</li>
                    <li>Filtrage Detailler</li>
                </ul>
            </div>
        </>

    )
}