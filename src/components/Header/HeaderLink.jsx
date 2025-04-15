
//* React Router Dom para la navegación
import { Link } from 'react-router-dom'

export default function HeaderLink({link,index,links,burgerMenu,setBurgerMenu}) {

    return (
        <>
            <li>
                <a
                    className='navLink'
                    href={`https://${link.to}`}  // Asegura que incluya el protocolo
                    title={link.title}
                    target="_self"  // Abre en la misma pestaña
                    rel="noopener noreferrer"  // Seguridad adicional para evitar vulnerabilidades de redirección
                >
                    {link.title}
                </a>
            </li>
            <div className={index>=0 ?"degradedSeparator degradedSeparator--header":""}/>
        </>
    )
}