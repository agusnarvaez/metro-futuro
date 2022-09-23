
import HeaderNavLink from "./HeaderNavLink";

export default function HeaderNav({burgerMenu}) {
    
    const links = [
        {
            title:"Home",
            to:"/"
        },
       /*  {
            title:"Aprende",
            to:"/courses"
        }, */
        {
            title:"Blog",
            to:"/blog"
        },
        {
            title:"Quienes Somos",
            to:"/about"
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
                        <HeaderNavLink link={link} key={key} index={key}/>
                )})}
            </ul>
    )
}