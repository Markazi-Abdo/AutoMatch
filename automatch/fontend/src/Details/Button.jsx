import BtnStyle from './Button.module.css'
export default function Button({name}) {

  return (
    <div className={BtnStyle.btnGrpPrint}>
        <button className={BtnStyle.buttonPrint} >{name}</button>
    </div>
  )
}
