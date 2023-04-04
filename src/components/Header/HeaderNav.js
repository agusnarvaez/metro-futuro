
import HeaderNavLink from "./HeaderNavLink";

export default function HeaderNav({burgerMenu,setBurgerMenu}) {

    const links = [
        /* {
            title:"Proyectos",
            to:"/investments"
        }, */
        {
            title:"Quienes somos",
            to:"/sobre-nosotros"
        },
        {
            title:"Aprende",
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
            </ul>
    )
}