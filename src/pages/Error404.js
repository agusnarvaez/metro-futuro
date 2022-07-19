import React from 'react';

import "../assets/css/404NotFound.css"

// Imagenes
import NotFound404ErrorImage from "../assets/img/404Error.png";

// Componentes
import DegradedNavLink from '../components/DegradedNavLink';

function Error404() {
    return (
        <main id="NotFound404ErrorPage">
            <img src={NotFound404ErrorImage} alt='Imagen de error 404' />
            <div className="sectionInfo">
                <h1>¡Lo sentimos! La página que estás buscando no pudo ser encontrada</h1>
                <DegradedNavLink route="/" text="Volver a la Home" backgroundColor="white" id="404ErrorLinkToHome"/>
                <DegradedNavLink route="/contact" text="Contáctanos" backgroundColor="white" id="404ErrorLinkToContact"/>
            </div>
        </main>
    )
}
export default Error404;