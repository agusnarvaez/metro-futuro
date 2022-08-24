// Importo React
import React,{useState} from "react";
// Hoja de estilos
import "../assets/css/header.css"

// React Router Dom para la navegación
import { NavLink } from 'react-router-dom'

// Logo de Metro Futuro
import metroFuturoLogo from "../assets/img/icons/metroFuturoLogo.png"

// Ícono de menú
import burgerMenuIcon from "../assets/img/icons/burgerMenuIcon.png";
import burgerMenuCrossIcon from "../assets/img/icons/BurgerMenuCrossIcon.png";

function Header() {
    const [burgerMenu, setBurgerMenu] = useState(true);
    // Función para scrollear hacia arriba cada vez que se toca un enlace
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    return (
        <header className="header" onClick={() => setBurgerMenu(!burgerMenu)}>
            <div className="headerShadow"></div>
            <div className="headerIcons">
                <img
                    src={metroFuturoLogo}
                    alt="metroFuturoLogo"
                    className="metroFuturoLogo"
                />
                {/** Burger Menu Icons **/}
                <img
                    className={burgerMenu?"burgerMenuIcon":"burgerMenuIconHidden"}
                    src={burgerMenuIcon}
                    alt="burgerMenuIcon"
                    onClick={() => setBurgerMenu(!burgerMenu)}
                />
                <img
                    className={burgerMenu?"burgerMenuIconHidden":"burgerMenuIcon"}
                    src={burgerMenuCrossIcon}
                    alt="burgerMenuCrossIcon"
                    onClick={() => setBurgerMenu(!burgerMenu)}
                />
            </div>
            {/** Navigation Links */}
            <ul className={burgerMenu?"navigation hiddenMenu":"navigation"} >
                <li >
                    <NavLink 
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/'
                        exact="true"
                    >
                    Home</NavLink>
                </li>
                <div className="degradedSeparator degradedSeparator--header"></div>
                {/* <li>
                    <NavLink
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/investments/list'
                    >
                        Inversiones</NavLink>
                </li> */}
                <li>
                    <NavLink 
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/learn'
                    >
                        Aprende</NavLink>
                </li>
                <div className="degradedSeparator degradedSeparator--header"></div>
                <li>
                    <NavLink 
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/about'
                    >
                        Quienes somos</NavLink>
                </li>
                <div className="degradedSeparator degradedSeparator--header"></div>
                <li>
                    <NavLink 
                        onClick={scrollToTop}
                        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                        to='/contact'
                    >
                        Contacto</NavLink>
                </li>
            </ul>
        </header >
    )
}

export default Header;