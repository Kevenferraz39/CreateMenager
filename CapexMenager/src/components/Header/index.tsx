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
            </nav>
        </header>
        </>
    )
}
export default Header   