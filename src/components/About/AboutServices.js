import React from 'react';

// Images & icons
import aboutServicesImg from "../../assets/img/aboutLiving.png";
import aboutListIcon from "../../assets/img/icons/aboutListIcon.png";

function AboutServices() {
    const services = ["Analizamos y estructuramos el negocio inmobiliario","Aplicamos la tecnología en el activo","Realizamos la estrategia de marketing","Lo comercializamos para obtener su plusvalía"]
    return (

        <section id="aboutServices">
                <img className="sectionCover" alt="aboutServicesImg" src={aboutServicesImg} />
                
                <div className="sectionInfo">
                    <h2>Enfocamos nuestros esfuerzos en el mejor servicio</h2>
                    <p>Nos ocupamos de la búsqueda de la menor oportunidad en los mercados europeos</p>
                    <div className="degradedSeparator"></div>
                    <ul>
                        {services.map((service, index) => { return(
                            <li>
                                <img alt="listIcon" src={aboutListIcon} />
                                <p>{service}</p>
                            </li>
                        )})}
                        
                    </ul>
                </div>
            </section>
    )
}
export default AboutServices;