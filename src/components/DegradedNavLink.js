//* ### LINK DEGRADADO A PÁGINA INTERNA ###

import { Link } from 'react-router-dom';

export default function DegradedLink(props) {

    //* FUNCIÓN PARA DESLIZAR HACIA ARRIBA DE TODO
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

return (
    <div onClick={scrollToTop} className="degradedLink" id={props.id}>

        <div className={`degradedLink_TextContainer degradedLink_TextContainer--${props.backgroundColor}`}>

            <Link to={props.route} className="degradedLink_Text">
                {props.text}
            </Link>

        </div>
        
    </div>
    
    )
}