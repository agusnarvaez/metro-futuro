
import HeaderNavLink from "./HeaderNavLink";

export default function HeaderNav({burgerMenu}) {
    
    const links = [
        {
            title:"Home",
            to:"/"
        },
        {
            title:"Aprende",
            to:"/learn"
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
                {links.map((link, index) => {
                    return(
                        <>
                            <HeaderNavLink link={link} index={index}/>
                        </>
                )})}
            </ul>
    )
}