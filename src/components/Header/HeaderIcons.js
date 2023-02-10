//* Logo de Metro Futuro
import metroFuturoLogo from "../../assets/img/icons/metroFuturoLogo.png"

//* Ícono de menú
import burgerMenuIcon from "../../assets/img/icons/burgerMenuIcon.png";
import burgerMenuCrossIcon from "../../assets/img/icons/BurgerMenuCrossIcon.png";

import { NavLink } from 'react-router-dom'

export default function HeaderIcons({burgerMenu,setBurgerMenu}) {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return (

            <div className="headerIcons">
                <NavLink
                    onClick={scrollToTop}
                    className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                    to="/"
                    exact="true"
                >
                    <img
                    src={metroFuturoLogo}
                    alt="metroFuturoLogo"
                    className="metroFuturoLogo"
                />
                </NavLink>

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
    )
}