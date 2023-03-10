
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
            to:"/sobreNosotros"
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