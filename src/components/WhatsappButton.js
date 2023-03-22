
//* IMÁGENES
import whatsappLogo from "../assets/img/icons/whatsappLogo.svg"
import credentials from "../credentials"


export default function WhatsappButton() {
    
    return (
        
            <a href={credentials.whatsappApi} className="whatsappButton" target="_blank" rel="noreferrer" title="whatsappButton">
                <img className="whatsappButton_img"src={whatsappLogo} alt="whatsappLogo" title="whatsappLogo" />
            </a>
        
    )
}