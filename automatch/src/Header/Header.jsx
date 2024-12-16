import './Header.css'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <header>
          <Link style={{color:"white",textDecoration:'none'}} to = '/' >  <h2>Auto Match</h2> </Link>
        </header>
    )
}