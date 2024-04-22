import './Header.css'
import { Link } from "react-router-dom"
import imagem from '../../../public/vite.svg'
const Header = () =>{
    return(
        <>
        <header>
            <nav>
                <Link to="/">
                    <img src={imagem} alt="imagem vite" />
                </Link>
                <ul>
                <li>
                    <Link to="/"><span>Home</span></Link>
                </li>
                <li>
                    <Link to="/"><span>Home</span></Link>
                </li>
                <li>
                    <Link to="/"><span>Home</span></Link>
                </li>
                <li>
                    <Link to="/"><span>Home</span></Link>
                </li>
                <li>
                    <Link to="/"><span>Home</span></Link>
                </li>
                
            </ul>
            </nav>
        </header>
        </>
    )
}
export default Header   