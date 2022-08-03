import React from 'react';

// Componentes
import DegradedLink from '../../components/DegradedLink';

function AboutSlogan() {

    return (
        <section id="aboutSlogan">
            <div className="aboutSloganText">
                <h2>A través de <font color="#004DFF">Metro Futuro</font>, todos podemos obtener los beneficios de participar de la compra y operación de un inmueble en Europa </h2>
            </div>
            <DegradedLink id="aboutSloganLink" text="¡Accede al Real Estate!" backgroundColor="lightGray" route="/contact" />      
        </section>
    )
}
export default AboutSlogan;