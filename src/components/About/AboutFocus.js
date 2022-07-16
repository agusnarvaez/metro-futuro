import React from 'react';

// Componente
import AboutFocusCard from './AboutFocusCard';

// Background
import aboutFocusBg from "../../assets/img/background/aboutFocusBg.png";

// Icons
import missionIcon from "../../assets/img/icons/missionIcon.png";
import visionIcon from "../../assets/img/icons/visionIcon.png";
import valuesIcon from "../../assets/img/icons/valuesIcon.png";


function AboutFocus() {
    const focusItems=[
        {
            icon:missionIcon,
            title: "Misión",
            text:"Globalizar la industria de bienes raíces, através de la educación, tecnología y capitalización de las inversiones de nuestra comunidad."
        },
        {
            icon:visionIcon,
            title: "Visión",
            text:"Dar acceso a cualquier persona del mundo a que pueda ser parte del engocio del Real Estate en Europa."
        },
        {
            icon:valuesIcon,
            title: "Valores",
            text:"El conocimiento, la transparencia e inclusión son los valores principales para un trabajo en equipo por el bien común."
        }
    ]
    return (

        <section id="aboutFocus">
            <h2 className='section_subTitle'>¿Cuál es nuestro foco?</h2>
            <div className='sectionInfo'>
                <ul>
                    {focusItems.map((item,index) => {
                        return(
                            <AboutFocusCard focus={item}/>
                        )
                    })}
                    
                    
                </ul>
            </div>
            <img alt="sectionBackground" className="sectionBackground--desktop" src={aboutFocusBg} />
        </section>

    )
}
export default AboutFocus;