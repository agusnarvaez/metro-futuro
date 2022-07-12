//* Importo React
import React from "react";



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
            <a href={props.route} className="degradedLink_Text">
                {props.text}
            </a>
        </div>
    </div>
    
    )
}
export default DegradedLink;