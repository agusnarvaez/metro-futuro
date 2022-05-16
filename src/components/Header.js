import { NavLink } from 'react-router-dom'
import "../assets/css/header.css"

function Header() {
    return (
        <header className="header">
            <h1>Metro Futuro</h1>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to='/' exact="true">Inicio</NavLink></li>
                <li><NavLink to='/investments/list'>Inversiones</NavLink></li>
                <li><NavLink to='/academy'>Academia</NavLink></li>
                <li><NavLink to='/about'>Sobre Nosotros</NavLink></li>
                <li><NavLink to='/contact' >Contacto</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;