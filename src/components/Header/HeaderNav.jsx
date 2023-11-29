
import HeaderNavLink from "./HeaderNavLink"
import DegradedLink from "../DegradedLink"
export default function HeaderNav({burgerMenu,setBurgerMenu}) {

    const links = [
        {
            title:"Home",
            to:"/"
        },
        {
            title:"Quienes somos",
            to:"/sobre-nosotros"
        },
        {
            title:"Inmuebles",
            to:"/inmuebles"
        },
        {
            title:"Academy",
            to:"/aprende"
        },
        {
            title:"Blog",
            to:"/blog"
        },
        {
            title:"Contacto",
            to:"/contacto"
        }
    ]



    return (

            <ul className={burgerMenu?"navigation hiddenMenu":"navigation"} >
                {links.map((link, key) => {
                    return(
                        <HeaderNavLink
                            index={key} key={key}
                            link={link} links={links}
                            burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}
                        />
                )})}
                <li className="login-button-li"><DegradedLink  text="Iniciar sesión" route='https://app.metro-futuro.com/login' backgroundColor="" id="login-button" inverted={true} /></li>
            </ul>
    )
}