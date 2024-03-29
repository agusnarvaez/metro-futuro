//* ### LINK DEGRADADO A PÁGINA INTERNA ###

import { Link } from 'react-router-dom'

export default function DegradedLink({id,text,route,backgroundColor}) {

    //* FUNCIÓN PARA DESLIZAR HACIA ARRIBA DE TODO
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

    return (
        <div onClick={scrollToTop} className="degradedLink" id={id}>

            <div className={`degradedLink_TextContainer degradedLink_TextContainer--${backgroundColor}`}>

                <Link rel="preconnect" to={route} className="degradedLink_Text" title={text}>
                    {text}
                </Link>

            </div>

        </div>

        )
}