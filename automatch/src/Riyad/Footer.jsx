import Style from './Style.module.css'
export default function Footer(){
    return(
        <>
            <div className={Style.Footer}>
                <ul className={Style.ListBtn}>
                    <li><button className={Style.FooterBtn}>Precedent</button></li>
                    <li><button className={Style.FooterBtn}>Suivant</button></li>
                </ul>
            </div>
        </>
        
    )
}