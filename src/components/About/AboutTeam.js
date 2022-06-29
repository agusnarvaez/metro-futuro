import React from 'react';

// Logos
import linkedinLogo from "../../assets/img/icons/aboutLinkedinLogo.png";

// Team avatars
import jobCarreraAvatar from "../../assets/img/team/jobCarreraDiaz.png";
import marielaScheloneAvatar from "../../assets/img/team/marielaSchelone.png";
import pedroSilvestriAvatar from "../../assets/img/team/pedroSilvestri.png";
import pedroNicholsonAvatar from "../../assets/img/team/pedroNicholson.png";
import juanPorrazzoAvatar from "../../assets/img/team/juanPorrazzo.png";

function AboutTeam() {

    return (
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
                        <a 
                            target="_blank"
                            href="https://www.linkedin.com/in/job-carrera-diaz-3471a325/"
                            rel="noopener noreferrer"
                        >
                            <div className="aboutTeamlinkedInLogo">
                                <img
                                    src={linkedinLogo}
                                    alt="linkedInLogo"
                                />
                            </div>
                        </a>
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
                        <a 
                            target="_blank"
                            href="https://www.linkedin.com/in/mariela-schenone-1890a43/"
                            rel="noopener noreferrer"
                        >
                            <div className="aboutTeamlinkedInLogo">
                                <img
                                    src={linkedinLogo}
                                    alt="linkedInLogo"
                                />
                            </div>
                        </a>
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
                        <a 
                            target="_blank" 
                            href="/"
                            rel="noopener noreferrer"
                        >
                            <div className="aboutTeamlinkedInLogo">
                                <img
                                    src={linkedinLogo}
                                    alt="linkedInLogo"
                                />
                            </div>
                        </a>
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
                        <a
                            target="_blank" 
                            href="https://www.linkedin.com/in/pedro-nicholson-ba737b9/"
                            rel="noopener noreferrer"   
                        >
                            <div className="aboutTeamlinkedInLogo">
                                <img
                                    src={linkedinLogo}
                                    alt="linkedInLogo"
                                />
                            </div>
                        </a>
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
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/juan-porrazzo-969b8383/"
                            rel="noopener noreferrer"   
                        >
                            <div className="aboutTeamlinkedInLogo">
                                <img
                                    src={linkedinLogo}
                                    alt="linkedInLogo"
                                />
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default AboutTeam;