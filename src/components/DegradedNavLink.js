//* Importo React
import React from "react";
import { Link } from 'react-router-dom';


function DegradedLink(props) {
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
export default DegradedLink;