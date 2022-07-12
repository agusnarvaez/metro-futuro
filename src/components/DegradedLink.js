//* Importo React
import React from "react";



function DegradedLink(props) {
    
return (
    <div className="degradedLink" id={props.id}>
        <div className={`degradedLink_TextContainer degradedLink_TextContainer--${props.backgroundColor}`}>
            <a href={props.route} className="degradedLink_Text">
                {props.text}
            </a>
        </div>
    </div>
    
    )
}
export default DegradedLink;