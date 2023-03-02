//* Importo Hooks y ReactGA (Google Anlytics)
import {useState} from "react";


//* COMPONENTS
import HeaderNav from "./Header/HeaderNav.js"
import HeaderIcons from "./Header/HeaderIcons.js"

export default function Header() {

    const [burgerMenu, setBurgerMenu] = useState(true);
    return (

        <header className="header">

            <div className="headerShadow" />

            <HeaderIcons burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}  />

            <HeaderNav burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
           
        </header >
    )
}