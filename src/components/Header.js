import { NavLink } from 'react-router-dom'
import "../assets/css/header.css"

function Header() {
    return (
        <header className="header">
            <h1 className='title'>Metro Futuro</h1>
            <ul className="navigation">
                <li ><NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to='/' exact="true">Home</NavLink></li>
                <li><NavLink to='/investments/list'>Inversiones</NavLink></li>
                <li><NavLink to='/academy'>Academia</NavLink></li>
                <li><NavLink to='/about'>Quienes somos</NavLink></li>
                {/* <li><NavLink to='/contact' >Contacto</NavLink></li> */}
            </ul>
        </header >
    )
}

export default Header;