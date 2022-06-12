/* import React, { useEffect, useState } from "react"; */
import { NavLink } from 'react-router-dom';
import "../assets/css/about.css"
import metroFuturoLogo from "../assets/img/logos/metroFuturoLogoTag.png";
import aboutTitleBg from "../assets/img/background/aboutTitleBg.png";
import aboutServicesImg from "../assets/img/aboutLiving.png";
import aboutListIcon from "../assets/img/icons/aboutListIcon.png"
import aboutFocusBg from "../assets/img/background/aboutFocusBg.png";
import missionIcon from "../assets/img/icons/missionIcon.png";
import visionIcon from "../assets/img/icons/visionIcon.png";
import valuesIcon from "../assets/img/icons/valuesIcon.png";
import aboutInfoBg from "../assets/img/background/aboutInfoBg.png";

import avatarExample from "../assets/img/avatarExample.png";
import jobCarreraAvatar from "../assets/img/team/jobCarreraDiaz.png";
import marielaScheloneAvatar from "../assets/img/team/marielaSchelone.png";
import pedroSilvestriAvatar from "../assets/img/team/pedroSilvestri.png";
import pedroNicholsonAvatar from "../assets/img/team/pedroNicholson.png";
import juanPorrazzoAvatar from "../assets/img/team/juanPorrazzo.png";
function About() {

    return (
        <div className="aboutPage">
            <section className="aboutTitle">
                <img alt="sectionBackground" className="sectionBackground" src={aboutTitleBg} />
                <img className="aboutMetroLogo" alt="aboutMetroLogo" src={metroFuturoLogo} />
                <h1>
                    Somos <br />
                    <font color="#004DFF">Metro Futuro</font>
                </h1>
                <p>Una empresa global de inmuebles tokenizados</p>
            </section>


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
            <section className="aboutInfo">
                <img alt="sectionBackground" className="sectionBackground" src={aboutInfoBg} />
                <h2>Agregamos valor generando mayor acceso a la <font color="#004DFF">industria inmobiliaria</font></h2>
                <p>
                    Un inmueble representa una necesidad primaria para cualquier persona, convirtiéndola así a la inversión rentable, productiva y segura.<br />
                    Utilizamos <b>tecnología blockchain</b> para registrar los tokens inmobiliarios a través de Smart Contracts (contratos inteligentes) permitiéndonos generar pequeñas participaciones del inmueble, lo que llamamos el fraccionamiento por m<sup>2</sup>, es decir, cualquierpersona puede comprar uin toquen que es una representación digital del negocio asociado al inmueble.<br />
                    Desde nuestra plataforma con tu billetera digital podes manejar tus inversiones, vender o comprar los tokens y recibir los dividendos mensualmente.
                </p>
            </section>
            <section className="aboutSlogan">
                <div className="aboutSloganText">
                    <h2>A través de <font color="#004DFF">Metro Futuro</font>, todos podemos obtener los beneficios de participar de la compra y operación de un inmueble en europa </h2>
                </div>
                <div className="aboutSlogansLink">
                    <div>
                        <NavLink to='/inversions/list'>
                            ¡Sumate a Metro Futuro, accede al Real State!
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="aboutTeam">
                <h2>Conoce al equipo</h2>
                <ul>
                    <li>
                        <div className="aboutTeamImage">
                            <div>
                                <img
                                    id='jobCarreraAvatar'
                                    alt="aboutTeamMemberImg"
                                    src={jobCarreraAvatar}
                                />
                            </div>
                        </div>
                        <div className="aboutTeamInfo">
                            <h3>Job Carrera Diaz</h3>
                            <p>Director de inmuebles</p>
                        </div>
                    </li>
                    <li>
                        <div className="aboutTeamImage">
                            <div>
                                <img
                                    id='marielaScheloneAvatar'
                                    alt="aboutTeamMemberImg"
                                    src={marielaScheloneAvatar}
                                />
                            </div>
                        </div>
                        <div className="aboutTeamInfo">
                            <h3>Mariela Schenone</h3>
                            <p>Directora financiera, fiscal y de estructuración</p>
                        </div>
                    </li>
                    <li>
                        <div className="aboutTeamImage">
                            <div>
                                <img
                                    id="pedroSilvestriAvatar"
                                    alt="aboutTeamMemberImg"
                                    src={pedroSilvestriAvatar}
                                />
                            </div>
                        </div>
                        <div className="aboutTeamInfo">
                            <h3>Pedro Silvestri</h3>
                            <p>Director financiero</p>
                        </div>
                    </li>
                    <li>
                        <div className="aboutTeamImage">
                            <div>
                                <img
                                    id="pedroNicholsonAvatar"
                                    alt="aboutTeamMemberImg"
                                    src={pedroNicholsonAvatar}
                                />
                            </div>
                        </div>
                        <div className="aboutTeamInfo">
                            <h3>Pedro Nicholson</h3>
                            <p>Director de legales</p>
                        </div>
                    </li>
                    <li>
                        <div className="aboutTeamImage" >
                            <div>
                                <img
                                    id="juanPorrazzoAvatar"
                                    alt="aboutTeamMemberImg"
                                    src={juanPorrazzoAvatar}
                                />
                            </div>
                        </div>
                        <div className="aboutTeamInfo">
                            <h3>Juan Porrazo</h3>
                            <p>Tech</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default About;