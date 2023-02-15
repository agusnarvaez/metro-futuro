
import HeaderNavLink from "./HeaderNavLink";

export default function HeaderNav({burgerMenu,setBurgerMenu}) {

    const links = [
        /*{
            title:"Home",
            to:"/"
        }, */
        /* {
            title:"Proyectos",
            to:"/investments"
        }, */
        {
            title:"Quienes somos",
            to:"/about"
        },
        {
            title:"Aprende",
            to:"/learn"
        },
        {
            title:"Blog",
            to:"/blog"
        },
        {
            title:"Contacto",
            to:"/contact"
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
            </ul>
    )
}