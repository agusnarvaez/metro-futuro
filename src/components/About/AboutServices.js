import React from 'react';

// Images & icons
import aboutServicesImg from "../../assets/img/aboutLiving.png";
import aboutListIcon from "../../assets/img/icons/aboutListIcon.png";

function AboutServices() {

    return (

        <section className="aboutServices">
                <div className="aboutServicesImg">
                    <img alt="aboutServicesImg" src={aboutServicesImg} />
                </div>
                <div className="aboutServicesText">
                    <h2>Enfocamos nuestros esfuerzos en el mejor servicio</h2>
                    <p>Nos ocupamos de la búsqueda de la menor oportunidad en los mercados europeos</p>
                    <div className="aboutServicesItemsSeparator"></div>
                    <ul className="aboutServicesItems">
                        <li>
                            <img alt="listIcon" src={aboutListIcon} />
                            Compramos el activo inmobiliario
                        </li>
                        <li>
                            <img alt="listIcon" src={aboutListIcon} />
                            Lo refaccionamos
                        </li>
                        <li>
                            <img alt="listIcon" src={aboutListIcon} />
                            Lo alquilamos
                        </li>
                        <li>
                            <img alt="listIcon" src={aboutListIcon} />
                            Lo comercializamos para obtener su plusvalía
                        </li>
                    </ul>
                </div>
            </section>
    )
}
export default AboutServices;