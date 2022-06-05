import { NavLink } from 'react-router-dom'
import "../assets/css/header.css"

function Header() {
    return (
        <header className="header">
            <img
                src="./assets/images/icons/metroFuturoLogo.png" alt="metroFuturoLogo"
            />
            <ul className="navigation">
                <li ><NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to='/' exact="true">Home</NavLink></li>
                <li><NavLink to='/investments/list'>Inversiones</NavLink></li>
                <li><NavLink to='/academy'>Aprende</NavLink></li>
                <li><NavLink to='/about'>Quienes somos</NavLink></li>
                {/* <li><NavLink to='/contact' >Contacto</NavLink></li> */}
            </ul>
        </header >
    )
}

export default Header;