//* Logo de Metro Futuro
import metroFuturoLogo from "../../assets/img/logos/metroFuturoLogo.png"

//* Ícono de menú
import burgerMenuIcon from "../../assets/img/icons/burgerMenuIcon.svg";
import burgerMenuCrossIcon from "../../assets/img/icons/BurgerMenuCrossIcon.svg";

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
                    className="metroFuturoLogo"
                    to="/"
                    exact="true"
                >
                    <img
                    src={metroFuturoLogo}
                    alt="metroFuturoLogo"
                    className="metroFuturoLogo"
                    title="metroFuturoLogo"
                />
                </NavLink>

                {/** Burger Menu Icons **/}
                <img
                    className={burgerMenu?"burgerMenuIcon":"burgerMenuIconHidden"}
                    src={burgerMenuIcon}
                    alt="burgerMenuIcon"
                    title="burgerMenuIcon"
                    onClick={() => setBurgerMenu(!burgerMenu)}
                />
                <img
                    className={burgerMenu?"burgerMenuIconHidden":"burgerMenuIcon"}
                    src={burgerMenuCrossIcon}
                    alt="burgerMenuCrossIcon"
                    title="burgerMenuCrossIcon"
                    onClick={() => setBurgerMenu(!burgerMenu)}
                />
            </div>
    )
}