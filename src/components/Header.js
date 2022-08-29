// Importo React
import {useState} from "react";

//* COMPONENTS
import HeaderNav from "./Header/HeaderNav.js"
import HeaderIcons from "./Header/HeaderIcons.js"

function Header() {

    const [burgerMenu, setBurgerMenu] = useState(true);
    
    return (

        <header className="header" onClick={() => setBurgerMenu(!burgerMenu)}>

            <div className="headerShadow" />

            <HeaderIcons burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}  />

            <HeaderNav burgerMenu={burgerMenu} />
           
        </header >
    )
}

export default Header;