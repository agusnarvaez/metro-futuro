//* Logo de Metro Futuro
import metroFuturoLogo from "../../assets/img/icons/metroFuturoLogo.png"

//* Ícono de menú
import burgerMenuIcon from "../../assets/img/icons/burgerMenuIcon.png";
import burgerMenuCrossIcon from "../../assets/img/icons/BurgerMenuCrossIcon.png";

export default function HeaderIcons({burgerMenu,setBurgerMenu}) {
    
    return (

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
    )
}