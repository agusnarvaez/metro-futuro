
//* React Router Dom para la navegación
import { NavLink } from 'react-router-dom'

export default function HeaderNavLink({link,index,links,burgerMenu,setBurgerMenu}) {

    //* Función para scrollear hacia arriba cada vez que se toca un enlace
    const scrollToTop = () =>{
        setBurgerMenu(!burgerMenu)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    return (
        <>
            <li>
                <NavLink
                    onClick={scrollToTop}
                    className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                    to={link.to}
                    title={link.title}
                    exact="true"
                >
                    {link.title}
                </NavLink>
            </li>
            <div className={index>=0/* &&index<(links.length-1) */?"degradedSeparator degradedSeparator--header":""}/>
        </>
    )
}