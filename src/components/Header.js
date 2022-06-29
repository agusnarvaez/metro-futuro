// Importo React
import React from "react";
// Hoja de estilos
import "../assets/css/header.css"

// React Router Dom para la navegación
import { NavLink } from 'react-router-dom'

// Logo de Metro Futuro
import metroFuturoLogo from "../assets/img/icons/metroFuturoLogo.png"

function Header() {

    // Función para scrollear hacia arriba cada vez que se toca un enlace
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
    return (
        <header className="header">
            <img
                src={metroFuturoLogo} alt="metroFuturoLogo"
            />
            <ul className="navigation">
                <li >
                    <NavLink 
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/'
                        exact="true"
                    >
                    Home</NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/investments/list'
                    >
                        Inversiones</NavLink>
                </li>
                <li>
                    <NavLink 
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/academy'
                    >
                        Aprende</NavLink>
                </li>
                <li>
                    <NavLink 
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/about'
                    >
                        Quienes somos</NavLink>
                </li>
                {/* <li><NavLink to='/contact' >Contacto</NavLink></li> */}
            </ul>
        </header >
    )
}

export default Header;