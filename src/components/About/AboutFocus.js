import React from 'react';

// Background
import aboutFocusBg from "../../assets/img/background/aboutFocusBg.png";

// Icons
import missionIcon from "../../assets/img/icons/missionIcon.png";
import visionIcon from "../../assets/img/icons/visionIcon.png";
import valuesIcon from "../../assets/img/icons/valuesIcon.png";


function AboutFocus() {

    return (

        <section className="aboutFocus">
            <img alt="sectionBackground" className="sectionBackground" src={aboutFocusBg} />
            <h2>¿Cual es nuestro foco?</h2>
            <ul>
                <li>
                    <img alt="focusItemIcon" src={missionIcon} />
                    <div>
                        <h3>Misión</h3>
                        <p>Globalizar la industria de bienes raíces, através de la educación, tecnología y capitalización de las inversiones de nuestra comunidad.</p>
                    </div>
                </li>
                <li>
                    <img alt="focusItemIcon" src={visionIcon} />
                    <div>
                        <h3>Visión</h3>
                        <p>Dar acceso a cualquier persona del mundo a que pueda ser parte del engocio del Real State en Europa.</p>
                    </div>
                </li>
                <li>
                    <img alt="focusItemIcon" src={valuesIcon} />
                    <div>
                        <h3>Valores</h3>
                        <p>El conocimiento, la transparencia e inclusión son los valores principales para un trabajo en equipo por el bien común.</p>
                    </div>
                </li>
            </ul>
        </section>

    )
}
export default AboutFocus;