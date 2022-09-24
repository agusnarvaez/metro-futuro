// Importo React
import {useState} from "react";

//* COMPONENTS

//* IMÁGENES
import whatsappLogo from "../assets/img/icons/whatsappLogo.svg"
import credentials from "../credentials"
export default function WhatsappButton() {
    
    return (
        
            <a href={credentials.whatsappApi} className="botonWhatsapp" target="_blank" rel="noreferrer">
                <img src={whatsappLogo} alt="whatsappLogo" />
            </a>
        
    )
}